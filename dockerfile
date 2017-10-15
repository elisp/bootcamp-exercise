FROM node:8.5.0-alpine

# env variables required during build
ENV PROJECT_DIR=/code

WORKDIR $PROJECT_DIR

RUN npm install -g nodemon

COPY package.json $PROJECT_DIR

RUN npm install \
    && npm ls

# Copy application files
COPY . $PROJECT_DIR

ENV NODE_ENV=development \
    APP_PORT=9100 \
    DEBUGGER_PORT=5858

ENV PORT=$APP_PORT

EXPOSE $APP_PORT $DEBUGGER_PORT
HEALTHCHECK CMD curl --fail http://localhost:$APP_PORT/hello || exit 1

# CMD ["npm", "start"]
