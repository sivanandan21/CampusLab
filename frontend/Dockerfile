# ==============================================================================
# CampusLab React + Vite Frontend Dockerfile
# Production-ready Node.js container with Vite preview server
# ==============================================================================

FROM node:20-alpine

WORKDIR /app

# Copy dependency specifications
COPY package.json pnpm-lock.yaml* package-lock.json* ./

# Install npm dependencies
RUN npm install

# Copy application source
COPY . .

# Build application for production
ARG VITE_API_URL=/api/v1
ARG VITE_USE_MOCK_API=false

ENV VITE_API_URL=$VITE_API_URL \
    VITE_USE_MOCK_API=$VITE_USE_MOCK_API

RUN npm run build

EXPOSE 5173

# Serve static bundle using Vite preview on port 5173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]
