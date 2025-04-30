# Stage 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Serve the app
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.output ./
EXPOSE 3000
ENV NITRO_PORT=3000
CMD ["node", "server/index.mjs"]
