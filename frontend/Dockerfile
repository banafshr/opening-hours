FROM node:latest

COPY . /src
WORKDIR /src

COPY ["yarn.lock", "package.json", "./"]
RUN yarn install --frozen-lockfile
RUN yarn test
EXPOSE 3000
COPY . .
CMD ["yarn", "build"]
