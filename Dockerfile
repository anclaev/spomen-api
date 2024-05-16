ARG node_version=20.13.1

# Stage 1: Сборка проекта
FROM node:${node_version}-alpine AS builder
WORKDIR /api

COPY package.json yarn.lock ./

RUN yarn install -frozen-lockfile --production
RUN yarn add -D prisma prisma-nestjs-graphql

COPY . . 

RUN yarn prisma generate
RUN yarn build

# Stage 2: Запуск приложения
FROM node:${node_version}-alpine
WORKDIR /home/user/spomen/api

LABEL maintainer="anclaev<iahugo@yandex.ru>"
LABEL description="Spomen API"

ENV NODE_ENV production

COPY --from=builder /api/dist ./
COPY --from=builder /api/package.json ./package.json
COPY --from=builder /api/yarn.lock ./yarn.lock
COPY --from=builder /api/prisma ./prisma
COPY --from=builder /api/node_modules ./node_modules

USER node

EXPOSE ${PORT}

CMD ["node", "main.js"]