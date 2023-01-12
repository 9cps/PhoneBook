FROM node:alpine3.17
WORKDIR /client/
COPY . .
ENV PATH /client/node_modules/.bin:$PATH
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]