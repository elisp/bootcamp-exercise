FROM node:8.5.0-alpine

# Working directory for application
WORKDIR /usr/src/app

# Copy application files
COPY . .

# Binds to port 7777
EXPOSE 7777
# Creates a mount point
VOLUME [ "/usr/src/app" ]