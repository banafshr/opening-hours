FROM node:latest

COPY . /src/app
WORKDIR /usr/src/app

COPY ["yarn.lock", "package.json", "./"]
RUN yarn install --frozen-lockfile
EXPOSE 3001
COPY . .
CMD ["yarn", "start"]
