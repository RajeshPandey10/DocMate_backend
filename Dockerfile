FROM node:18

WORKDIR /app

# Copy all files
COPY . .

# Install Python and pip

# Install Python, pip, and venv
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

# Create a Python virtual environment and install Whisper
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
RUN pip install --upgrade pip
RUN pip install openai-whisper

# Install Node.js dependencies
RUN npm install

# Expose port (change if your app uses a different port)
EXPOSE 5001

# Start the Node.js server
CMD ["npm", "start"]
