Param(
  [string]$TargetRoot = "",
  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

function Get-Timestamp {
  return (Get-Date).ToString("yyyyMMdd_HHmmss")
}

function Ensure-Dir([string]$Path) {
  if (-not (Test-Path -LiteralPath $Path)) {
    if (-not $DryRun) { New-Item -ItemType Directory -Path $Path | Out-Null }
  }
}

function Backup-IfExists([string]$Path, [string]$BackupRoot) {
  if (Test-Path -LiteralPath $Path) {
    $name = Split-Path -Leaf $Path
    $dest = Join-Path $BackupRoot $name
    Ensure-Dir $BackupRoot
    if (-not $DryRun) {
      Move-Item -LiteralPath $Path -Destination $dest
    }
    Write-Host "Backed up $Path -> $dest"
  }
}

function Copy-Dir([string]$Source, [string]$Dest) {
  if (-not (Test-Path -LiteralPath $Source)) {
    Write-Host "Skip missing source: $Source"
    return
  }
  Ensure-Dir $Dest
  $items = Get-ChildItem -LiteralPath $Source
  foreach ($item in $items) {
    $from = $item.FullName
    $to = Join-Path $Dest $item.Name
    if ($item.PSIsContainer) {
      if (-not $DryRun) {
        Copy-Item -Recurse -Force -LiteralPath $from -Destination $to
      }
    } else {
      if (-not $DryRun) {
        Copy-Item -Force -LiteralPath $from -Destination $to
      }
    }
  }
  Write-Host "Copied $Source -> $Dest"
}

$SquadRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$SquadRoot = Split-Path -Parent $SquadRoot
$SourceOpenCode = Join-Path $SquadRoot "opencode"

if ([string]::IsNullOrWhiteSpace($TargetRoot)) {
  $TargetRoot = Join-Path $env:USERPROFILE ".config\opencode"
}

$targetAgents = Join-Path $TargetRoot "agents"
$targetSkills = Join-Path $TargetRoot "skills"
$targetTools = Join-Path $TargetRoot "tools"

Ensure-Dir $TargetRoot
Ensure-Dir $targetAgents
Ensure-Dir $targetSkills
Ensure-Dir $targetTools

$backupRoot = Join-Path $TargetRoot ("backups\marketing-growth_" + (Get-Timestamp))

# Backup anything this installer will overwrite.
$sourceAgentsDir = Join-Path $SourceOpenCode "agents"
$sourceSkillsDir = Join-Path $SourceOpenCode "skills"
$sourceToolsDir = Join-Path $SourceOpenCode "tools"

if (Test-Path -LiteralPath $sourceAgentsDir) {
  Get-ChildItem -LiteralPath $sourceAgentsDir -Filter "*.md" | ForEach-Object {
    Backup-IfExists (Join-Path $targetAgents $_.Name) $backupRoot
  }
}

if (Test-Path -LiteralPath $sourceToolsDir) {
  Get-ChildItem -LiteralPath $sourceToolsDir | ForEach-Object {
    Backup-IfExists (Join-Path $targetTools $_.Name) $backupRoot
  }
}

if (Test-Path -LiteralPath $sourceSkillsDir) {
  Get-ChildItem -LiteralPath $sourceSkillsDir | ForEach-Object {
    Backup-IfExists (Join-Path $targetSkills $_.Name) $backupRoot
  }
}

Copy-Dir (Join-Path $SourceOpenCode "agents") $targetAgents
Copy-Dir (Join-Path $SourceOpenCode "skills") $targetSkills
Copy-Dir (Join-Path $SourceOpenCode "tools") $targetTools

Write-Host "Done. Target: $TargetRoot"
