FROM node:18-alpine

WORKDIR /app

# Copy everything first (avoids missing file issues)
COPY . .

# Install dependencies (works with or without package-lock.json)
RUN npm install --omit=dev

# Build if a build script exists (won’t fail if it doesn’t)
RUN npm run build || echo "No build step"

# Fly listens on the internal port, no EXPOSE required but fine to keep
EXPOSE 8080

CMD ["sh", "scripts/start.sh"]
