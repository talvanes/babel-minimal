# babel-node

A modern Node.js project template using Babel for ES6+ support.

## Features

- Babel with `@babel/preset-env` for modern JavaScript syntax
- Example [`Car`](src/car.js) class using ES6 modules
- Entry point: [`index.js`](index.js) demonstrates usage of the Car class
- Development mode with hot-reloading via Nodemon and Babel Node

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run in development mode:**
   ```sh
   npm run dev
   ```
   This uses Nodemon and Babel Node to run [`index.js`](index.js) with automatic reload on changes.

## Project Structure

```
.
├── index.js           # Entry point, imports and uses Car class
├── src/
│   └── car.js         # Car class (ES6 module)
├── babel.config.js    # Babel configuration
├── package.json       # Project metadata and scripts
└── ...
```

## License

See [`LICENSE.txt`](LICENSE.txt).

