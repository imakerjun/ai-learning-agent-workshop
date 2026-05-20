#!/bin/bash
# PostToolUse hook — Detects content/**/*.mdx edits and injects a system reminder
# asking Claude to invoke non-developer-reviewer agent on the next turn.
#
# Triggered by: Edit | Write | MultiEdit on any file under content/ with .mdx extension.
# Mechanism: Reads stdin JSON, extracts file_path, and outputs JSON to stdout that
# Claude Code interprets as additionalContext for the next model turn.

set -euo pipefail

input=$(cat)

# Extract file path from tool input
file_path=$(echo "$input" | python3 -c "
import json, sys
try:
    data = json.load(sys.stdin)
    tool_input = data.get('tool_input', {})
    # Edit/Write use file_path; MultiEdit uses file_path too
    fp = tool_input.get('file_path', '')
    print(fp)
except Exception:
    print('')
" 2>/dev/null || echo "")

# Only trigger for MDX files under content/
if [[ -z "$file_path" ]]; then
  exit 0
fi

if [[ "$file_path" != *"/content/"*".mdx" ]] && [[ "$file_path" != "content/"*".mdx" ]]; then
  exit 0
fi

# Compute relative path from project root for cleaner display
project_dir="${CLAUDE_PROJECT_DIR:-$(pwd)}"
rel_path="${file_path#$project_dir/}"

# Emit JSON output that injects additionalContext into the next turn.
# This is the documented Claude Code hooks JSON output format.
cat <<EOF
{
  "hookSpecificOutput": {
    "hookEventName": "PostToolUse",
    "additionalContext": "📝 MDX 콘텐츠 변경 감지: \`$rel_path\`\n\n비개발자 친화도 리뷰가 필요합니다. \`non-developer-reviewer\` 에이전트를 호출해 이 파일을 리뷰하세요. 리뷰 결과는 사용자에게 메시지로 보고하면 됩니다 (파일을 자동 수정하지 마세요 — 사용자가 결정).\n\n호출 예시: Agent(subagent_type='general-purpose', model='opus', description='Non-dev review of $rel_path', prompt='You are the non-developer-reviewer agent. Read .claude/agents/non-developer-reviewer.md and .claude/skills/non-developer-review/SKILL.md for your role and methodology. Then review the file $rel_path from a non-developer reader's perspective and report findings in the specified output format.')"
  }
}
EOF
