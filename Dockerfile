FROM node:19-alpine
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run build
EXPOSE 9000
CMD ["npm", "run", "preview"]
# CMD [ "npm", "run", "dev" ]