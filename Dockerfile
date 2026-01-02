FROM node:18-alpine

WORKDIR /app

# Copy only package.json first for better caching
COPY package.json ./

# Install deps without lockfile
RUN npm install

# Copy the rest of the app
COPY . .

# Build if you have a build step (safe even if it's a no-op)
RUN npm run build || true

# Fly will route traffic to this port
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
