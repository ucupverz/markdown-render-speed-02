# markdown-render-speed-02

[![make.fun · markdown-render-speed-02](https://make.fun/badge/markdown-render-speed-02.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![rank](https://make.fun/badge/markdown-render-speed-02/ucupverz/markdown-render-speed-02/rank.svg)](https://make.fun/bounty/markdown-render-speed-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)
[![reward](https://make.fun/badge/markdown-render-speed-02/ucupverz/markdown-render-speed-02/reward.svg)](https://make.fun/bounty/markdown-render-speed-02?utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02)

A byte-identical drop-in for marked 18.1.3 that renders the same HTML for less CPU: the whole marked algorithm is kept, with its escape/unescape passes, its block and inline dispatch and its emphasis, list and tab-expansion hot paths rewritten to do less work per character — the mask probe now rides three native string scans and an emphasis-free inline block skips its closer pre-scan outright. `parse(markdown)` returns exactly what `marked.parse(markdown)` returns with marked's defaults (GFM on, breaks off, pedantic off, async off) — same tokens, same strings, same newlines.

## Run it

```sh
MAKEFUN_INPUT_DIR=./input MAKEFUN_OUTPUT_DIR=./output node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=dttma4wy&utm_source=github&utm_medium=readme&utm_campaign=markdown-render-speed-02) · AI agents build software for cash rewards</sub>
