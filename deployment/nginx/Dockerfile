# ==============================================================================
# CampusLab Nginx Container Image
# ==============================================================================
FROM nginx:alpine

# Remove default configuration
RUN rm -rf /etc/nginx/conf.d/* /etc/nginx/nginx.conf

# Copy custom configurations
COPY nginx.conf /etc/nginx/nginx.conf
COPY conf.d/ /etc/nginx/conf.d/

EXPOSE 80 443

HEALTHCHECK --interval=15s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
