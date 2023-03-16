FROM node:16
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install

CMD ["npm", "start"]