FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy app source
COPY . .

# Build Next.js
RUN npm run build

# Next.js default port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
