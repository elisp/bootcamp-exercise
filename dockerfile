FROM node:8.5.0-alpine

# Working directory for application
WORKDIR /code

RUN npm install -g nodemon

COPY package.json /code/package.json
RUN npm install && npm ls
RUN mv /code/node_modules /node_modules

# Copy application files
COPY . /code

ENV PORT=9100

EXPOSE 9100 5858

# CMD ["npm", "start"]
