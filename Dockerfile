FROM node:18-alpine

WORKDIR /app

# Copy entire repo first so package.json is guaranteed to exist
COPY . .

# Install dependencies (works with or without lockfile)
RUN if [ -f package-lock.json ]; then \
      npm ci --omit=dev; \
    else \
      npm install --omit=dev; \
    fi

# Run build only if a build script exists
RUN if npm run | grep -q "build"; then npm run build; fi

EXPOSE 3000

CMD ["sh", "scripts/start.sh"]
