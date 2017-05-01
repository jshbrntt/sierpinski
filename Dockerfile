FROM node:7.9.0

ADD . /usr/src/sierpinski

WORKDIR /usr/src/sierpinski

RUN yarn install

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve"]