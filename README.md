
# Babel Minimal

A modern Node.js project template using Babel for ES6+ support, with built-in code quality tools.

## Features

- Babel with `@babel/preset-env` for modern JavaScript syntax
- Example [`Car`](src/car.js) class using ES6 modules
- Entry point: [`index.js`](src/index.js) demonstrates usage of the Car class
- Development mode with hot-reloading via Nodemon and Babel Node
- Production-ready build process with transpiled output to `dist/`
- Code quality tools:
  - ESLint for code linting and best practices enforcement
  - Prettier for consistent code formatting
  - Integration of ESLint with Prettier for conflict-free operation

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run in development mode:**
   ```sh
   npm run dev
   ```
   This uses Nodemon and Babel Node to run [`src/index.js`](src/index.js) with automatic reload on changes.

3. **Build for production:**
   ```sh
   npm run build
   ```
   This transpiles the source code from `src/` to the `dist/` directory using Babel.

4. **Run in production mode:**
   ```sh
   npm start
   ```
   This builds the project (if not already built) and runs the transpiled code from the `dist/` directory.

5. **Code Quality:**
   ```sh
   # Run ESLint to check for issues
   npm run lint

   # Fix auto-fixable ESLint issues
   npm run lint:fix
   ```
   The project uses ESLint with Prettier integration for consistent code style and quality.

## Code Style & Linting

This project uses modern ESLint flat configuration (`eslint.config.mjs`) with the following features:
- Latest ESLint configuration format using ES modules
- Node.js global environment pre-configured
- Customized rules:
  - Warning level for unused variables and undefined references
  - Recommended JavaScript rules enabled
- Intelligent file ignores for `node_modules`, `dist`, `coverage`, etc.
- Seamless integration with Prettier

Prettier enforces consistent code style with these settings:
- Semi-colons required
- Single quotes for strings
- 4 spaces indentation
- ES5-style trailing commas

The ESLint configuration uses the new flat config format introduced in ESLint 9.0, providing better performance and more flexible configuration options. It integrates perfectly with Prettier through `eslint-config-prettier` and `eslint-plugin-prettier`.

## Project Structure

```
.
├── src/              # Source directory
│   ├── index.js      # Entry point, imports and uses Car class
│   └── car.js        # Car class (ES6 module)
├── dist/             # Production build output (generated)
├── eslint.config.mjs # ESLint flat configuration (modern format)
├── .prettierrc      # Prettier configuration
├── babel.config.js  # Babel configuration
├── package.json     # Project metadata and scripts
├── nodemon.json     # Nodemon configuration for development
├── LICENSE.txt      # License file
└── ...
```

## License

See [`LICENSE`](LICENSE).

