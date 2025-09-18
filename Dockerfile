# Dockerfile for n8n Enterprise Unlocked
FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm@latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY packages/cli/package.json ./packages/cli/

# Copy all package.json files for proper dependency resolution
COPY packages/@n8n/*/package.json ./packages/@n8n/*/
COPY packages/frontend/*/package.json ./packages/frontend/*/
COPY packages/core/package.json ./packages/core/
COPY packages/workflow/package.json ./packages/workflow/
COPY packages/nodes-base/package.json ./packages/nodes-base/
COPY packages/node-dev/package.json ./packages/node-dev/
COPY packages/testing/package.json ./packages/testing/
COPY packages/extensions/*/package.json ./packages/extensions/*/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm build

# Expose port
EXPOSE 5678

# Set environment variables
ENV N8N_HOST=0.0.0.0
ENV N8N_PORT=5678
ENV NODE_ENV=production

# Start n8n
CMD ["pnpm", "--filter=n8n", "start"]