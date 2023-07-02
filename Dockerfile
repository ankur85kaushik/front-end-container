# Stage 1: Build the static files
FROM node:14 as builder

WORKDIR /app

COPY index.html .
COPY script.js .

# Stage 2: Serve the static files using Nginx
FROM nginx:latest

COPY --from=builder /app/index.html /usr/share/nginx/html
COPY --from=builder /app/script.js /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
