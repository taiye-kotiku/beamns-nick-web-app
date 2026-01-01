FROM node:18-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build (safe even if no build step exists)
RUN npm run build || echo "No build step"

# Fly expects the app to listen on this port
EXPOSE 3000

CMD ["npm", "start"]
