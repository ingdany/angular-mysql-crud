# Angular-MySQL-Crud

## Start Project

`npm init --yes`

### Install Packages

`npm i express morgan promise-mysql cors`

### Install Typescript

`npm i -g typescript`

### Start Typescript

`tsc --init`

Modify tsconfig.json 

```
target: es6
outDir: ./build
```

### To Convert JS

```
tsc
node build/index.js
```
### To Compile
`npm run build`


### Install package in Dev instance
`npm i nodemon -D`
`npm i express -D`

## Install Morgan and Cors
`npm i @types/morgan @types/cors -D`

## Connect to database
`mysql -u root -p`


package.json -> index.ts -> gamesRoutes -> gamesController -> database.ts -> keys.ts