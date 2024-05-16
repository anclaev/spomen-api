ARG node_version=20.13.1
ARG maintainer="anclaev<iahugo@yandex.ru>"
ARG description="Spomen API"

# Stage 1: Сборка проекта
FROM node:${node_version} AS builder

WORKDIR /api

COPY package*.json yarn.lock ./

RUN yarn install
RUN yarn add -D prisma

COPY . . 

RUN yarn prisma generate
RUN yarn build

# Stage 2: Запуск приложения
FROM node:${node_version} AS runtime

LABEL maintainer=${maintainer}
LABEL description=${description}

ENV NODE_ENV production
ENV PORT 7001

WORKDIR /home/user/spomen/api

COPY --from=builder /api/package*.json ./
COPY --from=builder /api/yarn.lock ./
COPY --from=builder /api/prisma ./
COPY --from=builder /api/dist ./dist

RUN yarn install --production

USER node

EXPOSE ${PORT}

CMD ["node", "dist/main.js"]