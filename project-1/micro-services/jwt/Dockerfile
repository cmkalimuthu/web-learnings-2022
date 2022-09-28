FROM node:latest
WORKDIR /usr/src/app
COPY package*.json hello.js ./
RUN npm install
EXPOSE 8080
CMD ["node", "hello.js"]