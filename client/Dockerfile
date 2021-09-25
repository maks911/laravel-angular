FROM node:7.7.2-alpine
WORKDIR /var/www/client
COPY package.json .
RUN npm install --quiet
COPY . .
