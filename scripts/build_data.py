#!/usr/bin/env python3
"""Regenerate pmm_data.js from corpus.json (the single source of truth).
Run from the repo root:  python3 scripts/build_data.py"""
import pathlib
root = pathlib.Path(__file__).resolve().parent.parent
d = (root / "corpus.json").read_text().strip()
(root / "pmm_data.js").write_text(
    "/* AUTO-GENERATED from corpus.json — do not edit by hand. */\n"
    "window.PMM_DATA = " + d + ";\n"
)
print("wrote pmm_data.js")
