FROM node:18-alpine AS base

ARG SENTRY_AUTH_TOKEN

# Stage 1: Установка зависимостей
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock*  ./
COPY .yarnrc ./

RUN yarn install --ignore-engines --frozen-lockfile --production  
RUN yarn add -D prisma prisma-nestjs-graphql --ignore-engines


# Stage 2: Сборка проекта
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn sentry-cli login --auth-token ${SENTRY_AUTH_TOKEN}
RUN yarn prisma generate
RUN yarn build:production

# State 3: Запуск приложения
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

COPY --from=builder --chown=nestjs:nodejs /app/dist ./
COPY --from=builder --chown=nestjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nestjs:nodejs /app/yarn.lock ./yarn.lock
COPY --from=builder --chown=nestjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules

USER nestjs

EXPOSE ${PORT}

CMD [  "yarn", "start:migrate:production" ]