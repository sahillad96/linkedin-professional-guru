# LinkedIn Professional Guru - n8n Extended Image
FROM n8n:latest

# Install additional dependencies if needed
RUN npm install --global --save \
    @n8n/n8n-nodes-base@latest

# Set working directory
WORKDIR /home/node

# Expose port
EXPOSE 5678

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:5678/healthz || exit 1

# Start n8n
CMD ["n8n"]