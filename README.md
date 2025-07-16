# babel-node

A modern Node.js project template using Babel for ES6+ support.

## Features

- Babel with `@babel/preset-env` for modern JavaScript syntax
- Example [`Car`](src/car.js) class using ES6 modules
- Entry point: [`index.js`](index.js) demonstrates usage of the Car class
- Development mode with hot-reloading via Nodemon and Babel Node
- Production-ready build process with transpiled output

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

3. **Build for production:**
   ```sh
   npm run build
   ```
   This transpiles the source code from `src/` to `dist/` directory using Babel.

4. **Run in production mode:**
   ```sh
   npm start
   ```
   This builds the project and runs the transpiled code from the `dist/` directory.

## Project Structure

```
.
├── src/              # Source directory
│   ├── index.js      # Entry point, imports and uses Car class
│   └── car.js        # Car class (ES6 module)
├── dist/             # Production build output (generated)
├── babel.config.js   # Babel configuration
├── package.json      # Project metadata and scripts
└── ...
```

## License

See [`LICENSE.txt`](LICENSE.txt).

