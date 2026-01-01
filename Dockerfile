FROM node:18-alpine

WORKDIR /app

# Copy everything first (so package.json definitely exists)
COPY . .

# Install deps (works with or without package-lock.json)
RUN if [ -f package-lock.json ]; then \
      npm ci --omit=dev; \
    else \
      npm install --omit=dev; \
    fi

# Build only if a build script exists
RUN if npm run | grep -q "build"; then npm run build; fi

EXPOSE 3000

CMD ["sh", "scripts/start.sh"]
