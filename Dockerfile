FROM node:10

WORKDIR /usr/src/wolfi

COPY package* /usr/src/wolfi/

RUN npm install

COPY . .

EXPOSE 9001

CMD [ "npm", "start" ]