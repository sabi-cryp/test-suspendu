# Use the official Node.js image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port on which your app will run
EXPOSE 30001

# Command to run your application
CMD ["node", "app.js"]
