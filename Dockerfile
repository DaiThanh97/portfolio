FROM node:14-alpine AS build

RUN mkdir /resume
WORKDIR /resume

COPY package.json .
RUN npm install
COPY . .

ENV NODE_ENV=production

CMD [ "npm", "start" ]