# Boardgame

## Set Up

Install protoc by downloading the corresponding version for your operating system (do not download the language specific binaries) from here:

[https://github.com/protocolbuffers/protobuf/releases](https://github.com/protocolbuffers/protobuf/releases)

Add the path to the downloaded version `bin` directory to the `PATH` variable.

If set up correctly, `protoc --version` should return the installed version on the console.

Install globally `ts-protoc-gen`:

`npm install -g ts-protoc-gen`

## How to run

`npm run run`

Or to compile and run:

```
npm run compile
node build/game/main.js
```

Individual TS files can be run with ts-node. Example:

`ts-node src/main.ts`

## Tests

Tests are using Chai+Mocha. You can run all tests with:

`npm run testall`

You can also run individual tests using ts-mocha. Example:

`ts-mocha src/test/game/util/die_test.ts`

## Pre-commits

Make sure to run the linter and pre-commit tests before sending your pull request.

### Lint

To display all errors:

`npm run lintall`

To fix all errors:

`npm run lintfixall`

We use both `prettier` and `eslint` to eslint our code. If you need to run them independently, you can.

#### Prettier

To display all errors:

`npm run prettier -- --check src/game/**/*`

To fix all existing errors:

`npm run prettier -- --write src/game/**/*`


#### Eslint

To display existing lint errors:

`npm run eslint -- src/game/**/* src/test/game/**/*`

To fix all existing errors:

`npm run eslint -- --fix src/game/**/* src/test/game/**/*`
