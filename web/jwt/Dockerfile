FROM node:current-alpine

WORKDIR jwt-chall

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000/TCP

CMD [ "node", "."]
