FROM node:18-alpine

WORKDIR /app

# Copy only package.json (no lockfile required)
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build Next.js
RUN npm run build

# Fly will route traffic here
EXPOSE 3000

CMD ["npm", "start"]
