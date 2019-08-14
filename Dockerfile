# Image
FROM node:10.0.0-alpine

# Author
LABEL maintainer="Peter Souza"

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# copy all file from current dir to /app in container
COPY . /app/

# --pure-lockfile: Don’t generate a yarn.lock lockfile
RUN npm install --no-save

# expose port 3001
EXPOSE 3333

#Assim que for carregado o container será executado
ENTRYPOINT npm start