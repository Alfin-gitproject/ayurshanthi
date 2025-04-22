# Use the official Node.js image from the Docker Hub
FROM node:14

# Create a directory for the app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the backend directory to the working directory
COPY backend ./backend

# Copy the frontend directory to the working directory
COPY frontend ./frontend

# Set the working directory to the backend folder
WORKDIR /usr/src/app/backend

# Expose the port your app runs on (port 8080 as per previous messages)
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]
