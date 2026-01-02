FROM node:18-alpine

WORKDIR /app

# Disable Next.js telemetry (optional but recommended)
ENV NEXT_TELEMETRY_DISABLED=1

# Install dependencies
COPY package.json ./
RUN npm install

# Copy app source
COPY . .

# Build Next.js
RUN npm run build

# Fly.io will route traffic here
EXPOSE 3000

CMD ["npm", "start"]
