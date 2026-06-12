# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev        # Start with hot-reload (nodemon + babel-node, watches src/)
npm run build      # Transpile src/ → dist/ via Babel
npm start          # Build then run dist/index.js
npm run typecheck  # Run TypeScript type-checker (tsc --noEmit) over JS+JSDoc
npm run lint       # Check for lint/format issues
npm run lint:fix   # Auto-fix lint/format issues
```

There is no test suite configured.

## Architecture

All source lives in `src/`. The entry point is `src/index.js`. Babel transpiles ES6+ to CommonJS for Node.js; the output goes to `dist/` (not committed).

**Path aliases** (configured in both `babel.config.js` and `tsconfig.json`):
- `@` and `@root` → `./src`
- `@tests` → `./tests`

Use these aliases instead of relative paths when importing within the project.

## Type Checking

The project uses **JSDoc-based TypeScript checking** — source files remain `.js`, but `tsc` validates them using JSDoc annotations. This is configured in `tsconfig.json` via `"allowJs": true`, `"checkJs": true`, and `"strict": true`. TypeScript never emits output (`"noEmit": true`); Babel owns the build.

**Rules for JSDoc annotations:**
- Annotate constructor parameters and non-obvious function signatures with `@param {Type}` and `@returns {Type}`.
- TypeScript infers property types and return types from usage, so avoid redundant annotations where inference is sufficient.
- Run `npm run typecheck` after any change to confirm no type errors.

`jsconfig.json` has been removed; `tsconfig.json` now serves as the single source of truth for both VS Code IntelliSense and the CLI type-checker.

## Code Style

Prettier enforces **no semicolons** (the `semi: false` rule in `eslint.config.mjs` takes precedence). Other style rules: single quotes, 4-space indentation, ES5 trailing commas. Run `npm run lint:fix` to auto-apply formatting.
