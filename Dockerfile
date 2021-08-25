FROM node:10.16.0

WORKDIR /app

ADD . /app

CMD yarn install
