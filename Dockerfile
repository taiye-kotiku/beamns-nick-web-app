FROM node:18-alpine

WORKDIR /app

# Copy dependency manifest
COPY package.json ./

# Install deps
RUN npm install

# Copy app source
COPY . .

# Build Next.js
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
