# os-prediction

**Everything it takes to predict.** An open, grounded map of the knowledge behind every enterprise machine-learning prediction problem — built for humans and agents.

Most "how to do ML" resources are flat lists. `os-prediction` is a **connected graph**: **83 knowledge blocks, 135 prerequisite links**, across **25 enterprise prediction use cases** and **8 knowledge areas** — laid out from the basics at the base to the frontier at the top. Every block maps to a **real, named unit** in a reputable curriculum (fast.ai, DeepLearning.AI, ISLR, Hands-On ML, scikit-learn, d2l.ai, FPP3, lifelines, EconML, PyOD, and more), and every link says *what to learn first*. It's a true DAG you can compute learning paths on.

> **Grounded, opinionated.** The **blocks** are sourced; the **structure** (prerequisites, difficulty, which use case needs what) is a considered opinion — open to contribution.

## The map

Open `index.html` in any browser — no build step, no server, no GPU. Colour = the *kind of knowledge*; height = basics → frontier; tap any dot to trace its prerequisites and see its source; filter by use case to light up its footprint across areas.

*(Hosted version: coming soon.)*

## What's in the box

| File | What it is |
|---|---|
| `corpus.json` | **The dataset** — knowledge blocks, prerequisites, use-case memberships, areas, and citations. The single source of truth. |
| `index.html` | The interactive visualization (self-contained, CPU-only). |
| `pmm_data.js` | The dataset as a JS global, **auto-generated** from `corpus.json`. |
| `scripts/build_data.py` | Regenerates `pmm_data.js` from `corpus.json`. |

Regenerate after editing the dataset:

```bash
python3 scripts/build_data.py
```

## Data model

`corpus.json` → `knowledgeBlocks[]`, each with:

- `id`, `label` — stable id + human name
- `area` — one of 8 knowledge areas (drives colour)
- `difficulty` — 0 (foundations) → 1 (frontier)
- `importance` — 1–3 (hub-ness)
- `ucs` — the use cases that require it (or `"ALL"` for shared foundations)
- `prereqs[]` — direct prerequisites (the "learn first" edges)
- `sources[]` — `{ corpus, unit, url }` citations to real curriculum units

plus `areas[]` (the 8 knowledge areas + colours), `useCases[]` (25 use cases grouped by business domain), and `domains[]`.

## Coverage

- **8 areas:** Foundations & data · Classical ML · Evaluation & tuning · Deep learning · Time-series · Survival / time-to-event · Causal & uplift · Anomaly & unsupervised
- **25 use cases** across Financial services, Marketing & customer, Supply chain & pricing, Manufacturing & assets, Healthcare & workforce.
- **Scope:** tabular & time-series enterprise prediction. Vision/NLP-only material is intentionally out of scope.

## Contributing

This is **v0.1** — a robust basis, not the final word. If a prerequisite is wrong, a membership is off, or a block is missing, open an issue or a PR. The fastest way to a shared standard is to build it in the open.

## Licensing

Multi-licensed so each part is reusable under terms that fit it:

- **Code** (`index.html`, `pmm_data.js`, `scripts/`) — **MIT** (`LICENSE`).
- **Database** (`corpus.json` — its structure & compilation) — **Open Database License (ODbL) v1.0** (`LICENSE-DATA.txt`).
- **Content** (authored descriptions, labels, curated text) — **Creative Commons Attribution-ShareAlike 4.0** (`LICENSE-CONTENT.txt`).

In short: build whatever you want with it; if you improve the dataset, keep the derivative open and share it back.

## Credits

A field map by **Théo Marcolini**. Vendor-neutral.
