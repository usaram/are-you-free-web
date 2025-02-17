# Install dependencies only when needed
FROM public.ecr.aws/docker/library/node:23-alpine3.20 AS base

FROM base AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /web

# Install dependencies based on the preferred package manager
COPY web/package.json web/yarn.lock* web/package-lock.json* web/pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /web
COPY --from=deps /web/node_modules ./node_modules
COPY . .

# Uncomment the following line in case you want to disable telemetry during the build.
# ENV SVELTE_TELEMETRY_DISABLED=1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run sveltekit
FROM base AS runner
WORKDIR /web

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV SVELTE_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 svelte

COPY --from=builder /web/build ./build

# Set the correct permission for prerender cache
RUN mkdir .svelte-kit
RUN chown svelte:nodejs .svelte-kit

COPY --from=builder --chown=svelte:nodejs /web/svelte.config.js ./
COPY --from=builder --chown=svelte:nodejs /web/build ./build
COPY --from=builder --chown=svelte:nodejs /web/pnpm-lock.yaml /web/package.json ./
COPY --from=deps --chown=svelte:nodejs /web/node_modules ./node_modules

USER svelte

EXPOSE 5173
ENV PORT=5173

ENV SVELTE_TELEMETRY_DISABLED=1
CMD ["node", "build"]
