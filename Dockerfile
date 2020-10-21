FROM node:8.11.4-alpine

RUN mkdir -p /src
RUN npm install express-generator -g

WORKDIR /src
ADD /package.json /src/package.json
RUN npm install

EXPOSE 3000