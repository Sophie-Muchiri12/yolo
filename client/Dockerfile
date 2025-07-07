# Multi-stage build for optimal size
FROM node:18-alpine AS builder

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine

# Install serve globally and curl for health checks
RUN npm install -g serve 

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S frontend -u 1001

# Copy built application
COPY --from=builder /app/build /app/build

# Change ownership
RUN chown -R frontend:nodejs /app

# Switch to non-root user
USER frontend

# Expose port
EXPOSE 3000



# Start application
CMD ["serve", "-s", "/app/build", "-l", "3000"]