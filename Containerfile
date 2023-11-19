FROM oven/bun:1.0

WORKDIR /usr/src/app

COPY ./build .

ARG PORT
EXPOSE ${PORT:-3000}

ENV NODE_ENV production

CMD [ "bun", "index.js" ]