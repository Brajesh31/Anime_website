#!/usr/bin/env python3
"""Validate local Markdown links, HTML image references, and Mermaid blocks."""
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
IMG_RE = re.compile(r"<img\b([^>]*)>", re.IGNORECASE)
ATTR_RE = re.compile(r"""([\w:-]+)\s*=\s*["']([^"']*)["']""")
MERMAID_OPEN_RE = re.compile(r"^\s*`{3}mermaid\s*$", re.MULTILINE)
FENCE_CLOSE_RE = re.compile(r"^\s*`{3}\s*$", re.MULTILINE)


def local_target(document: Path, raw: str, errors: list[str], kind: str) -> int:
    target = raw.split("#", 1)[0]
    if not target:
        return 0
    parsed = urlsplit(target)
    if parsed.scheme or target.startswith("//"):
        return 0
    target_path = Path(unquote(parsed.path))
    if target_path.is_absolute():
        return 0
    resolved = (document.parent / target_path).resolve()
    try:
        resolved.relative_to(ROOT.resolve())
    except ValueError:
        errors.append(f"{document.relative_to(ROOT)}: {kind} escapes repository: {raw}")
        return 0
    if not resolved.exists():
        errors.append(f"{document.relative_to(ROOT)}: missing {kind}: {raw}")
    return 1


def main() -> int:
    errors: list[str] = []
    checked_links = 0
    checked_images = 0
    mermaid_blocks = 0

    for document in MARKDOWN:
        source = document.read_text(encoding="utf-8")
        for match in LINK_RE.finditer(source):
            raw = match.group(1) or match.group(2) or ""
            checked_links += local_target(document, raw, errors, "link")

        for match in IMG_RE.finditer(source):
            attributes = dict(ATTR_RE.findall(match.group(1)))
            src = attributes.get("src", "")
            if not src:
                errors.append(f"{document.relative_to(ROOT)}: HTML image has no src")
                continue
            if "alt" not in attributes:
                errors.append(f"{document.relative_to(ROOT)}: HTML image has no alt attribute")
            checked_images += local_target(document, src, errors, "image")

        openings = len(MERMAID_OPEN_RE.findall(source))
        closings = len(FENCE_CLOSE_RE.findall(source))
        mermaid_blocks += openings
        if closings < openings:
            errors.append(f"{document.relative_to(ROOT)}: Mermaid code fence may be unclosed")

    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    if len(IMG_RE.findall(readme)) < 5:
        errors.append("README.md: expected visible HTML image elements for project artwork and badges")

    if errors:
        print("Documentation validation failed:")
        print("\n".join(f"- {error}" for error in errors))
        return 1

    print(
        "Documentation validation passed: "
        f"{checked_links} local links, {checked_images} local HTML image references, "
        f"{mermaid_blocks} Mermaid blocks across {len(MARKDOWN)} Markdown files."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
