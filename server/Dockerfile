FROM node:16
WORKDIR /server/
COPY config/* ./config/
COPY models/* ./models/
COPY repository/* ./repository/
COPY routes/* ./routes/
COPY package*.json index.js ./
RUN npm install
EXPOSE 3001
CMD [ "node", "index.js" ]