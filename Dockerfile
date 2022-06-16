FROM node:16 As development

WORKDIR /usr/src/app

COPY package*.json ./

COPY yarn.lock ./

RUN node -v && sleep 1

RUN yarn

COPY . .

RUN yarn build:prod
