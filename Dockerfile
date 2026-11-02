# Multi-stage Dockerfile — TanStack Start (nitro node-server) para EasyPanel
FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lock* bun.lockb* bunfig.toml* ./
RUN bun install --frozen-lockfile 2>/dev/null || bun install

FROM oven/bun:1 AS builder
WORKDIR /app
ENV NITRO_PRESET=node-server
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
COPY --from=builder /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
