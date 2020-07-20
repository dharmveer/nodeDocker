# Bring base image
FROM node:alpine
#create working directory
WORKDIR /usr/nodeapp
#Bring all files
COPY ./package.json ./
#run installer
RUN npm install
COPY . .
#Default command

CMD ["npm", "start"]