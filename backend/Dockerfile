
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci 


RUN addgroup -g 1001 -S nodejs && \
    adduser -S backend -u 1001

COPY . .


RUN mkdir -p uploads


USER backend

# Expose port
EXPOSE 5000


# Start application
CMD ["npm", "start", "node server.js"]