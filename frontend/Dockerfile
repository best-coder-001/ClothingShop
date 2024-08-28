FROM node:alpine

WORKDIR /ClothingShop/frontned
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev