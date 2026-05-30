# Use Node LTS as the runtime (stable and widely used)
FROM node:24-alpine

# Install pnpm globally so it's available to any user (corepack is per-user and breaks after USER node)
RUN npm install -g pnpm@9

WORKDIR /app

# Lockfile + manifest first to cache the install layer (rebuilds skip re-download when deps haven't changed)
COPY pnpm-lock.yaml package.json ./
RUN pnpm install --frozen-lockfile

# Source files are copied separately so only code changes trigger the build step
COPY . .

RUN pnpm build

# Give the node user ownership so Vite can write temp files at runtime
RUN chown -R node:node /app

# Vite preview's default port
EXPOSE 4173

# Without a healthcheck, a hung-but-alive process won't trigger Docker's restart policy
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4173/ || exit 1

# Switch to non-root user (limits blast radius if the server is compromised)
USER node

CMD ["pnpm", "preview", "--host"]
