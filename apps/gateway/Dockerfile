ARG VERSION="latest"

FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install dependencies only when needed
FROM base AS deps
RUN mkdir -p /temp/prod
COPY dist/apps/gateway/package.json /temp/prod/
COPY dist/apps/gateway/*.lock /temp/prod/
RUN cd /temp/prod && bun install --production --frozen-lockfile

# Production image, copy all the files and run nest
FROM base AS runner
ARG VERSION="latest"

ENV NODE_ENV=production
ENV APP_VERSION=${VERSION}
ENV PORT=3001

COPY --from=deps /temp/prod/node_modules ./node_modules
COPY --from=deps /temp/prod/package.json ./package.json
COPY dist/apps/gateway .

USER bun
EXPOSE ${PORT}/tcp
ENTRYPOINT [ "bun", "run", "main.js" ]