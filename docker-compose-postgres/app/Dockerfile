FROM node:18
WORKDIR /app
COPY . .
RUN apt-get update && apt-get install -y netcat-openbsd
RUN npm install
CMD ["./wait-for-db.sh", "node", "app.js"]