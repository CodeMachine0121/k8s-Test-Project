FROM node
WORKDIR /app
COPY package.json ./
ADD static ./static
RUN npm i 
COPY index.js /app/
EXPOSE 80
CMD ["node", "index.js"]


