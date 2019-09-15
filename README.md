# Boardgame

## How to run

```
npm run compile
node build/main.js
```

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

`npm run prettier -- --check src/ts/**/*`

To fix all existing errors:

`npm run prettier -- --write src/ts/**/*`


#### Eslint

To display existing lint errors:

`npm run eslint -- src/ts/**/*`

To fix all existing errors:

`npm run eslint -- --fix src/ts/**/*`

### Tests

