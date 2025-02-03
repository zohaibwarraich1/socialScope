FROM node:latest AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . ./

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/node_modules /app/node_modules

COPY --from=build /app /app

RUN npm run build
CMD ["npm", "start"]
