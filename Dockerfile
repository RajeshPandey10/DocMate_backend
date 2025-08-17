FROM node:18

WORKDIR /app

# Copy all files
COPY . .

# Install Python and pip
RUN apt-get update && apt-get install -y python3 python3-pip

# Install Python dependencies
RUN pip3 install openai-whisper

# Install Node.js dependencies
RUN npm install

# Expose port (change if your app uses a different port)
EXPOSE 5001

# Start the Node.js server
CMD ["npm", "start"]
