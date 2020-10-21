FROM node:10

COPY ["package.json", "/usr/local/nodeapps/"]

WORKDIR /usr/local/nodeapps

RUN npm install

RUN ls

COPY ["." ,  "/usr/local/nodeapps/"]

EXPOSE 3000

CMD ["node" , "index.js"]
