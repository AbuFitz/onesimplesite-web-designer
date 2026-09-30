#!/usr/bin/env sh
set -eu

target="${1:-claude}"
script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
repo_root=$(dirname "$script_dir")

copy_skill() {
  source_dir="$1"
  destination="$2"
  mkdir -p "$destination"
  cp "$source_dir/SKILL.md" "$destination/SKILL.md"
  for folder in agents assets evals references scripts; do
    if [ -d "$source_dir/$folder" ]; then
      rm -rf "$destination/$folder"
      cp -R "$source_dir/$folder" "$destination/$folder"
    fi
  done
}

install_suite() {
  skills_root="$1"
  mkdir -p "$skills_root"
  copy_skill "$repo_root" "$skills_root/onesimplesite-web-designer"
  copy_skill "$repo_root/skills/onesimplesite-research" "$skills_root/onesimplesite-research"
  copy_skill "$repo_root/skills/onesimplesite-skill-lab" "$skills_root/onesimplesite-skill-lab"
}

case "$target" in
  claude)
    install_suite "$HOME/.claude/skills"
    ;;
  codex)
    install_suite "${CODEX_HOME:-$HOME/.codex}/skills"
    ;;
  both)
    install_suite "$HOME/.claude/skills"
    install_suite "${CODEX_HOME:-$HOME/.codex}/skills"
    ;;
  *)
    echo "Usage: scripts/install.sh [claude|codex|both]" >&2
    exit 1
    ;;
esac

echo "Installed OneSimpleSite skill suite for $target."

