# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR.

## Scripts

| Script      | Command                   | Description                         |
| ----------- | ------------------------- | ----------------------------------- |
| `dev`       | `vite`                    | Start dev server with HMR           |
| `build`     | `tsc -b && vite build`    | Type-check and build for production |
| `lint`      | `oxlint`                  | Lint all source files (type-aware)  |
| `lint:fix`  | `oxlint --fix`            | Lint and auto-fix                   |
| `fmt`       | `oxfmt`                   | Format all files                    |
| `fmt:check` | `oxfmt --check`           | Check formatting (CI use)           |
| `check`     | `oxfmt --check && oxlint` | Run all checks                      |
| `preview`   | `vite preview`            | Preview production build locally    |

## Linting & Formatting

- **Oxlint** — linting (82 rules, type-aware via tsgolint)
- **Oxfmt** — formatting (Prettier-compatible)

## Pre-commit Hooks

Pre-commit hooks are installed automatically via `pnpm install`. On every commit:

1. `oxfmt` formats all staged files
2. `oxlint --fix` lints and fixes staged `.ts`/`.tsx` files

If any check fails, the commit is blocked.

## Docker / Podman

### Build

```bash
# Docker
docker build -t redux-todo .

# Podman (needs --format docker for HEALTHCHECK support)
podman build --format docker -t redux-todo .
```

### Run (foreground)

```bash
# Docker
docker run -p 4173:4173 redux-todo

# Podman
podman run -p 4173:4173 redux-todo
```

### Run (detached + auto-start on boot)

```bash
# Docker
docker run -d --restart unless-stopped -p 4173:4173 redux-todo

# Podman
podman run -d --restart unless-stopped -p 4173:4173 redux-todo
```

The app will be available at `http://localhost:4173`.

The `--restart unless-stopped` flag ensures the container starts automatically when the system boots.
