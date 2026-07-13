# os-prediction

**Everything it takes to predict.** Every prediction problem needs its own body of knowledge, and no one has ever mapped it. This is that map: an open, grounded **knowledge graph** of what each enterprise machine-learning prediction problem actually requires, built for humans and agents.

Courses teach you all of ML. Use-case guides teach you one trick. Nothing connects them into "for this problem, here is the knowledge you need, in what order." `os-prediction` is that missing bridge: **83 knowledge blocks, 135 prerequisite links**, across **25 enterprise prediction use cases** and **8 knowledge areas**, laid out from the basics at the base to the frontier at the top. Every block maps to a **real, named unit** in a reputable curriculum (fast.ai, DeepLearning.AI, ISLR, Hands-On ML, scikit-learn, d2l.ai, FPP3, lifelines, EconML, PyOD, and more), and every link says *what to learn first*. It is a true DAG you can compute learning paths on.

> **Grounded, opinionated.** The blocks are sourced. The structure (prerequisites, difficulty, which use case needs what) is a considered opinion, open to contribution.

## The map

Open `index.html` in any browser. No build step, no server, no GPU. Colour is the *kind of knowledge*; height runs from the basics at the base to the frontier at the top; tap any dot to trace its prerequisites and see its source; filter by use case to light up its footprint across areas.

*(Hosted version: coming soon.)*

## What's in the box

| File | What it is |
|---|---|
| `corpus.json` | **The dataset.** Knowledge blocks, prerequisites, use-case memberships, areas, and citations. The single source of truth. |
| `index.html` | The interactive visualization (self-contained, CPU-only). |
| `pmm_data.js` | The dataset as a JS global, **auto-generated** from `corpus.json`. |
| `scripts/build_data.py` | Regenerates `pmm_data.js` from `corpus.json`. |

Regenerate after editing the dataset:

```bash
python3 scripts/build_data.py
```

## Data model

`corpus.json` contains `knowledgeBlocks[]`, each with:

- `id`, `label`: stable id and human name
- `area`: one of 8 knowledge areas (drives colour)
- `difficulty`: 0 (foundations) to 1 (frontier)
- `importance`: 1 to 3 (hub-ness)
- `ucs`: the use cases that require it (or `"ALL"` for shared foundations)
- `prereqs[]`: direct prerequisites (the "learn first" edges)
- `sources[]`: `{ corpus, unit, url }` citations to real curriculum units

plus `areas[]` (the 8 knowledge areas and colours), `useCases[]` (25 use cases grouped by business domain), and `domains[]`.

## Coverage

- **8 areas:** Foundations & data · Classical ML · Evaluation & tuning · Deep learning · Time-series · Survival / time-to-event · Causal & uplift · Anomaly & unsupervised
- **25 use cases** across Financial services, Marketing & customer, Supply chain & pricing, Manufacturing & assets, Healthcare & workforce.
- **Scope:** tabular and time-series enterprise prediction. Vision and NLP-only material is intentionally out of scope.

## Roadmap

Today os-prediction is a **knowledge graph**: typed blocks, prerequisite links, use-case memberships, and citations. The direction is to publish its schema as a formal, machine-readable **ontology** (named relation types, then RDF/OWL) so AI agents can reason over what a given prediction problem requires, not just humans reading a map.

## Contributing

This is **v0.1**, a robust basis, not the final word. If a prerequisite is wrong, a membership is off, or a block is missing, open an issue or a PR. The fastest way to a shared standard is to build it in the open.

## Licensing

Multi-licensed so each part is reusable under terms that fit it:

- **Code** (`index.html`, `pmm_data.js`, `scripts/`): **MIT** (`LICENSE`).
- **Database** (`corpus.json`, its structure and compilation): **Open Database License (ODbL) v1.0** (`LICENSE-DATA.txt`).
- **Content** (authored descriptions, labels, curated text): **Creative Commons Attribution-ShareAlike 4.0** (`LICENSE-CONTENT.txt`).

In short: build whatever you want with it. If you improve the dataset, keep the derivative open and share it back.
