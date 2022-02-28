FROM node:16-alpine As development

RUN apk add --no-cache python2 g++ make

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN node -v && sleep 1

RUN yarn

COPY . .

RUN yarn build:prod
