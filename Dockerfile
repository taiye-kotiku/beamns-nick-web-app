FROM node:18-alpine

WORKDIR /app

# Install deps (no lockfile required)
RUN npm install --omit=dev

# Copy the rest of the app
COPY . .

# Build (safe even if no build script)
RUN npm run build || echo "no build step"

EXPOSE 8080

CMD ["npm", "start"]
