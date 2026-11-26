ARG NEXUS_HOST=65.0.55.183
FROM ${NEXUS_HOST}:8083/node:24-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]