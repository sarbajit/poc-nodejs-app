ARG NEXUS_HOST=65.0.55.183
FROM ${NEXUS_HOST}:8083/node:24-alpine
WORKDIR /app
COPY package*.json .npmrc ./
# Project .npmrc points npm at Nexus; the credential is exposed as NEXUS_NPM_AUTH
# only for this command (docker build --secret id=npm_auth,env=NEXUS_NPM_AUTH)
RUN --mount=type=secret,id=npm_auth,env=NEXUS_NPM_AUTH npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]