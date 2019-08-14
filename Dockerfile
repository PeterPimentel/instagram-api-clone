# Image
FROM node:latest

# Author
LABEL maintainer="Peter Souza"

# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# copy the package.json to dir
COPY package.json /app/

# --pure-lockfile: Don’t generate a yarn.lock lockfile
RUN npm install --no-save

# copy all file from current dir to /app in container
COPY . /app/

# expose port 3001
EXPOSE 3333

#Comand to execute the aplication
CMD [ "npm", "start" ]