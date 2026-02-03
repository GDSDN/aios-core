const { execSync } = require('child_process');
const assert = require('assert');
const path = require('path');

try {
  const output = execSync('node src/hello.js', { cwd: path.resolve(__dirname, '..') })
    .toString()
    .trim();
  assert.strictEqual(output, 'Hello, OpenCode AIOS!');
  console.log('✅ Test Passed: Output matches expectation.');
} catch (e) {
  console.error('❌ Test Failed:', e.message);
  process.exit(1);
}
