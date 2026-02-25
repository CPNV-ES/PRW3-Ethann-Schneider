FROM node:25.6.1

WORKDIR /app

COPY backend/. .

RUN rm -f .env 
RUN rm -rf node_modules
RUN rm -rf dist/*

RUN npm install

COPY frontend/. ./frontend

WORKDIR /app/frontend
RUN rm -rf node_modules
RUN npm install
RUN npx vite build --outDir ../dist

WORKDIR /app

RUN rm -rf ./frontend

EXPOSE 3001

ENV PORT=3001
ENV MONGO_URI=mongodb://mongo:27017/notesdb

CMD ["npm", "run", "start"]