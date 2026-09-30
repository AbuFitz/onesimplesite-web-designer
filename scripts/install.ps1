param(
  [ValidateSet("Claude", "Codex", "Both")]
  [string]$Target = "Claude"
)

$ErrorActionPreference = "Stop"
$RepoRoot = Split-Path -Parent $PSScriptRoot

function Copy-Skill($Source, $Destination) {
  New-Item -ItemType Directory -Force -Path $Destination | Out-Null
  Copy-Item -Force (Join-Path $Source "SKILL.md") $Destination
  foreach ($Folder in @("agents", "assets", "evals", "references", "scripts")) {
    $Path = Join-Path $Source $Folder
    if (Test-Path $Path) {
      Copy-Item -Recurse -Force $Path $Destination
    }
  }
}

function Install-Suite($SkillsRoot) {
  New-Item -ItemType Directory -Force -Path $SkillsRoot | Out-Null
  Copy-Skill $RepoRoot (Join-Path $SkillsRoot "onesimplesite-web-designer")
  foreach ($Name in @("onesimplesite-research", "onesimplesite-skill-lab")) {
    Copy-Skill (Join-Path $RepoRoot "skills\$Name") (Join-Path $SkillsRoot $Name)
  }
}

if ($Target -in @("Claude", "Both")) {
  Install-Suite (Join-Path $HOME ".claude\skills")
  Write-Host "Installed OneSimpleSite suite for Claude."
}
if ($Target -in @("Codex", "Both")) {
  Install-Suite (Join-Path $HOME ".codex\skills")
  Write-Host "Installed OneSimpleSite suite for Codex."
}

