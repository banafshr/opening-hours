This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)


## Development
This project has been developed with the following versions of `node` and `yarn`.

```sh
$ node -v
v14.9.0

$ yarn -v
1.22.55
```

To run the project in the development mode, you'd have to get both backend and the frontend running. 

Run `yarn` and `yarn start` in both directories (`api` and `fronted`)
The frontend is accessible on `localhost:300`
Backend runs on `localhost:3001`


## Build 

You can either build this project in `docker` or in your local machine

### Docker
To run the project in Docker, you'd need to have `Docker` and `Docker compose` installed on your computer.

The root of the project, run 
```sh
docker-compose up --build
```
> Note: This might take some time

The frontend is accessible on `localhost:300`
Backend runs on `localhost:3001`

### Locally

Run the backend in the background by running `yarn start` in `/api` 
And in `/frontend` run 

```sh
yarn build && yarn serve
``` 

## Tests

Unit tests are written with `jest` and `react testing library`
End to end tests afre written with `cypress`
To run tests, in `/frontend`:
unit tests: `yarn test`
e2e tests yarn cy:run

> To run the e2e tests, make sure that you have the project running on `localhost:3000`