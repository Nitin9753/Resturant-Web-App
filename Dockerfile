# Installing node.js image
FROM node:alpine

# Set the working directory inside container
WORKDIR /app

# Copy files
COPY . .

RUN npm install 

RUN npm uninstall bcrypt


RUN npm install bcrypt

# Exposing the port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
