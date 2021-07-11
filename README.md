## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

After having started the app, you can access the endpoints via Postman or a similar client, the API routes are prefixed by "/api". The static files are just there to demonstrate the redirection by the guards.

All the routes are protected by a basic email/password authentication, so you must signin (using the credentials in the code) or signup in order to get the authentication token allowing you to access the resources. The `facts` endpoints is open to the usual CRUD operations.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

Automated tests and linting have been configured as a git pre-push hook, in order to push to the remote repository only linted and tested code.

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

