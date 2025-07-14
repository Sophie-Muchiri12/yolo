# Use Node.js Alpine for minimal image size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./


# Install dependencies
RUN npm install

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S backend -u 1001

# Copy application code
COPY . .

# Change ownership to non-root user
RUN chown -R backend:nodejs /app

# Switch to non-root user
USER backend

# Expose port
EXPOSE 5000

# Start application
CMD ["npm", "start"]