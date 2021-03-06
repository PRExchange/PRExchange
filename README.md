# PRExchange

As a developer not associated with a professional team, it can be difficult to get the community involved with your projects. PRExchange aims to address this issue. PRExchange is a forum that allows developers to link to their GitHub projects, and provide examples of issues they would like opened. An other developer can then choose to open this issue, in exchange for an issue being opened on one of his or her own GitHub projects. Or maybe for a beer, or coffee, or lunch.

Ultimately, this is a tool that developers can use to both pad their resumes and generate community involvement in their projects.

## Team

- Alex Matranga

## Contributing

Contributions are always welcome! Feel free to open an issue or see [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

# Table of Contents

1. [Requirements](#Requirements)
1. [Development](#Development)
  1. [Installing Dependencies](#Dependencies)
  1. [Database Initialization](#Database)
  1. [Running the Application](#Running)

## Requirements

- Node 7.10.x
- PostgreSQL 9.6.x


## Development

### Dependencies

From the root of the directory you have cloned your project to
```
npm install
```
OR
```
npm i
```

New dependencies can be installed with
```
npm install --save <dependency>
```
OR
```
npm i --save <dependency>
```

### Database Initialization

IMPORTANT: Ensure `postgres` is running before performing the following steps.

### Database Creation:

Create a new database for your environment and test environments:

Development environment: `createdb YOUR_DEVELOPMENT_DATABASE`

Other environments are specified as: `createdb OTHER_ENVIRONMENT_DATABASE`

### Run Migrations and Data Seeds

#### Mac Users

In the terminal from your root directory:

`export NODE_ENV=development && knex migrate:latest`

`export NODE_ENV=development knex migrate:rollback`

`export NODE_ENV=development && knex seed:run`

`export NODE_ENV=test && knex migrate:latest`

#### Windows Users

In the terminal from your root directory:
```
$env:NODE_ENV=development
knex migrate:latest
```
```
$env:NODE_ENV=development
knex migrate:rollback
```
```
$env:NODE_ENV=development
knex seed:run
```
```
$env:kneNODE_ENV=test
knex migrate:latest
```


## Running the Application

To run webpack build: `npm run build`

To have webpack watch for changes: `npm run build:watch`

To run the server: `npm start`

To have the server watch for changes: `npm run nodemon`
