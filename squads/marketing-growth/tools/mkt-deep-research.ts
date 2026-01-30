/// <reference path="./opencode-plugin.d.ts" />
import { tool } from '@opencode-ai/plugin';
import { spawn } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

type DeepResearchArgs = {
  query?: string;
  prompt?: string;
  grounded?: boolean;
  model?: string;
  location?: string;
  project?: string;
  exclude_domains?: string[];
  slug?: string;
  max_output_tokens?: number;
  temperature?: number;
};

function nowTimestampSafe() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

function slugify(input: string) {
  const s = String(input || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  return s.length > 0 ? s : 'research';
}

async function runCmd(cmd: string[]) {
  return await new Promise<string>((resolve, reject) => {
    const child = spawn(cmd[0], cmd.slice(1), { shell: false });
    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (d) => {
      stdout += String(d);
    });
    child.stderr.on('data', (d) => {
      stderr += String(d);
    });
    child.on('error', (err) => reject(err));
    child.on('close', (code) => {
      if (code && code !== 0) {
        reject(new Error(`Command failed (${code}): ${cmd.join(' ')}\n${stderr}`.trim()));
        return;
      }
      resolve(stdout.trim());
    });
  });
}

function vertexBaseUrl(location: string) {
  const loc = (location || 'global').trim();
  return loc === 'global'
    ? 'https://aiplatform.googleapis.com'
    : `https://${loc}-aiplatform.googleapis.com`;
}

function extractText(json: any) {
  const parts = json?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return '';
  return parts
    .map((p: any) => (typeof p?.text === 'string' ? p.text : ''))
    .filter(Boolean)
    .join('\n');
}

export default tool({
  description:
    'Deep research via Vertex AI Gemini (gcloud auth). Saves raw.json + report.md under docs/marketing/RESEARCH/.',
  async execute(args: DeepResearchArgs | string, context: any) {
    try {
      const parsed: DeepResearchArgs =
        typeof args === 'string' ? { query: args } : args && typeof args === 'object' ? args : {};

      const model = (parsed.model || 'gemini-3-pro-preview').trim();
      const location = (parsed.location || 'global').trim();
      const grounded = typeof parsed.grounded === 'boolean' ? parsed.grounded : true;
      const query = String(parsed.query || '').trim();
      const prompt = String(parsed.prompt || '').trim();
      const temperature = typeof parsed.temperature === 'number' ? parsed.temperature : 0.2;
      const maxOutputTokens =
        typeof parsed.max_output_tokens === 'number' ? parsed.max_output_tokens : 4096;

      if (!query && !prompt) {
        return 'Missing input: provide `query` or `prompt`.';
      }

      const project =
        String(parsed.project || '').trim() ||
        String(process.env.GOOGLE_CLOUD_PROJECT || '').trim() ||
        (await runCmd(['gcloud', 'config', 'get-value', 'project']));
      if (!project || project.includes('(unset)')) {
        return 'GCP project not configured. Run: gcloud config set project <PROJECT_ID>';
      }

      const accessToken = await runCmd(['gcloud', 'auth', 'print-access-token']);
      if (!accessToken) {
        return 'No access token. Run: gcloud auth login';
      }

      const finalPrompt = prompt || query;
      const slug = slugify(String(parsed.slug || '').trim() || query || 'research');
      const runId = `${nowTimestampSafe()}__${slug}`;

      const worktree = String(context?.worktree || process.cwd());
      const outDir = path.join(worktree, 'docs', 'marketing', 'RESEARCH', runId);
      await fs.mkdir(outDir, { recursive: true });

      const endpoint = `${vertexBaseUrl(location)}/v1/projects/${project}/locations/${location}/publishers/google/models/${model}:generateContent`;

      const body: any = {
        contents: [
          {
            role: 'user',
            parts: [{ text: finalPrompt }],
          },
        ],
        generationConfig: {
          temperature,
          maxOutputTokens,
        },
        model: `projects/${project}/locations/${location}/publishers/google/models/${model}`,
      };

      if (grounded) {
        const excludeDomains = Array.isArray(parsed.exclude_domains)
          ? parsed.exclude_domains
              .filter((d) => typeof d === 'string')
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        body.tools = [
          {
            googleSearch: excludeDomains.length ? { exclude_domains: excludeDomains } : {},
          },
        ];
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(body),
      });

      const rawText = await res.text();
      let rawJson: any = null;
      try {
        rawJson = JSON.parse(rawText);
      } catch {
        rawJson = { _non_json_response: rawText };
      }

      await fs.writeFile(
        path.join(outDir, 'raw.json'),
        JSON.stringify({ request: body, response: rawJson }, null, 2),
        'utf8'
      );

      if (!res.ok) {
        await fs.writeFile(
          path.join(outDir, 'error.txt'),
          `Vertex AI request failed (${res.status}): ${res.statusText}\n\n${rawText}`,
          'utf8'
        );
        return `Vertex AI request failed (${res.status}). Saved: docs/marketing/RESEARCH/${runId}/error.txt`;
      }

      const reportText = extractText(rawJson);
      const reportPath = path.join(outDir, 'report.md');
      const header = [
        '# Deep Research Report',
        '',
        `- run: ${runId}`,
        `- model: ${model}`,
        `- location: ${location}`,
        `- grounded: ${grounded ? 'true' : 'false'}`,
        '',
        '---',
        '',
      ].join('\n');
      await fs.writeFile(reportPath, `${header}${reportText}\n`, 'utf8');

      return `Saved: docs/marketing/RESEARCH/${runId}/ (report.md, raw.json)`;
    } catch (error: any) {
      return `Deep research tool error: ${error?.message || String(error)}`;
    }
  },
});
