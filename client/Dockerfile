# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application with legacy OpenSSL provider
RUN NODE_OPTIONS="--openssl-legacy-provider" npm run build


FROM node:18-alpine

# Install serve globally
RUN npm install -g serve


RUN addgroup -g 1001 -S nodejs && \
    adduser -S frontend -u 1001


COPY --from=builder /app/build /app/build

# Change ownership to non-root user
RUN chown -R frontend:nodejs /app

# Switch to non-root user
USER frontend

# Expose port
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "/app/build", "-l", "3000"]