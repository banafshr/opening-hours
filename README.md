This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)


## Development
This project has been developed with the following versions of `node` and `yarn`.

```sh
$ node -v
v14.9.0

$ yarn -v
1.22.55
```

To run the project in the development mode, you'd have to get both backend and the frontend running. In the root of the directly first run

```sh
yarn
```

And then run the following commands to run both projects:

```sh
yarn workspace backend start
yarn workspace frontend start
```


## Build 

You can either build this project in docker or in your local machine

### Docker
To run the project in Docker, you'd need to have `Docker` and `Docker compose` installed on your computer.

The root of the project, run 
```sh
docker-compose up --build
```
> Note: This might take some time
