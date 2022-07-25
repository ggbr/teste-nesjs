FROM node:16-alpine AS builder


WORKDIR /home/node

COPY . .

RUN npm install

CMD ["npm", "run","start:dev"]