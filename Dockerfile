FROM resin/rpi-node:0.10.22
RUN npm install -g grunt-cli

COPY . /app

WORKDIR /app

RUN npm install
RUN grunt release

CMD ["node", "server"]