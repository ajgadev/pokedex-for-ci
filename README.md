[![Deployment Pipeline](https://github.com/ajgadev/pokedex-for-ci/actions/workflows/pipeline.yml/badge.svg)](https://github.com/ajgadev/pokedex-for-ci/actions/workflows/pipeline.yml)

# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

## Issues

This is an old project with webpack. Maybe you will run into deprecation errors.

A workaround is

    export NODE_OPTIONS=--openssl-legacy-provider


Check this [link](https://github.com/webpack/webpack/issues/14532)