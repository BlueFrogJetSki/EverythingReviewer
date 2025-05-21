FROM node:24-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# Stage 2: Serve the app
FROM node:24-alpine
WORKDIR /app
COPY --from=builder /app/.output ./
EXPOSE 3000
ENV NITRO_PORT=3000
CMD ["node", "server/index.mjs"]
