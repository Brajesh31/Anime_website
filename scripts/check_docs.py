#!/usr/bin/env python3
"""Validate repository-owned Markdown links without third-party packages."""
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
EXCLUDED = {"node_modules", ".git", "dist", "coverage"}
MARKDOWN = sorted(
    path for path in ROOT.rglob("*.md")
    if not any(part in EXCLUDED for part in path.relative_to(ROOT).parts)
)
LINK_RE = re.compile(r"!??\[[^\]]*\]\((?:<([^>]+)>|([^\s)]+))(?:\s+[^)]*)?\)")

def main() -> int:
    errors = []
    checked = 0
    for document in MARKDOWN:
        text = document.read_text(encoding="utf-8")
        for match in LINK_RE.finditer(text):
            raw = match.group(1) or match.group(2) or ""
            target = raw.split("#", 1)[0]
            if not target:
                continue
            parsed = urlsplit(target)
            if parsed.scheme or target.startswith("//"):
                continue
            target_path = Path(unquote(parsed.path))
            if target_path.is_absolute():
                continue
            resolved = (document.parent / target_path).resolve()
            try:
                resolved.relative_to(ROOT.resolve())
            except ValueError:
                errors.append(f"{document.relative_to(ROOT)}: link escapes repository: {raw}")
                continue
            checked += 1
            if not resolved.exists():
                errors.append(f"{document.relative_to(ROOT)}: missing target: {raw}")
    if errors:
        print("Documentation link validation failed:")
        print("\n".join(f"- {error}" for error in errors))
        return 1
    print(f"Documentation link validation passed: {checked} local links across {len(MARKDOWN)} repository Markdown files.")
    return 0

if __name__ == "__main__":
    sys.exit(main())
