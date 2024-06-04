# Nuxt 3 builder
FROM node:20-slim as builder

WORKDIR /app

COPY . .

RUN npm run build

# Nuxt 3 production
FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/.output  /app/.output

ENV NITRO_PORT=80

EXPOSE 80

CMD [ "node", ".output/server/index.mjs" ]