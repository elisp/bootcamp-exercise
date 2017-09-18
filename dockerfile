FROM node:8.5.0-alpine

# Working directory for application
WORKDIR /code

RUN npm install -g nodemon

COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules

# Copy application files
COPY . /code

CMD ["npm", "start"]
