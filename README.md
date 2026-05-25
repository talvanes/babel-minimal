# Babel Minimal

A lightweight Node.js boilerplate utilizing Babel for ES6+ transpilation. This template is architected around modern JavaScript best practices and a robust suite of code-quality tooling.

## Features

- **Modern Syntax Support:** Babel powered by `@babel/preset-env` for seamless ES6+ development.
- **Modular Architecture:** Includes a sample [`Car`](src/car.js) class demonstrating ES6 module patterns.
- **Streamlined Entry Point:** [`index.js`](src/index.js) serves as the primary execution hook.
- **Optimized Development Workflow:** Hot-reloading orchestrated via Nodemon and `@babel/node`.
- **Production-Ready Pipeline:** Automated build process that transpiles source code into a `dist/` distribution directory.
- **Advanced Module Resolution:**
  - Configured path aliasing (`@`, `@root`, `@tests`).
  - Elimination of "relative path hell" through absolute-like imports.
  - Enhanced maintainability via clean, declarative import statements.
- **Integrated Code Quality Suite:**
  - **ESLint:** For static analysis and enforcement of best practices.
  - **Prettier:** For opinionated, consistent code formatting.
  - **Conflict-Free Integration:** Seamless interoperability between ESLint and Prettier.

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Launch development mode:**
   ```sh
   npm run dev
   ```
   *Runs [`src/index.js`](src/index.js) using Nodemon and Babel Node with automatic process restarts on file changes.*

3. **Compile for production:**
   ```sh
   npm run build
   ```
   *Transpiles the source code from `src/` to the `dist/` directory.*

4. **Execute production build:**
   ```sh
   npm start
   ```
   *Builds the project (if necessary) and executes the transpiled assets from the `dist/` directory.*

5. **Perform linting and formatting checks:**
   ```sh
   # Audit code for linting errors
   npm run lint

   # Automatically resolve fixable linting issues
   npm run lint:fix
   ```

## Code Style & Linting

This project leverages the modern ESLint flat configuration (`eslint.config.mjs`) to provide a high-performance, flexible linting environment:
- **ESM Native:** Utilizes the latest ESLint configuration format using ES modules.
- **Pre-configured Environment:** Node.js global environments are enabled by default.
- **Strict Rule Enforcement:**
  - Configured warnings for unused variables and undefined references.
  - Implementation of industry-standard JavaScript recommended rules.
- **Optimized Ignoring:** Intelligent exclusion of `node_modules`, `dist`, `coverage`, and other build artifacts.
- **Seamless Tooling:** Deep integration with Prettier via `eslint-config-prettier` and `eslint-plugin-prettier`.

**Prettier Configuration:**
- Required semicolons.
- Single quotes for string literals.
- 4-space indentation.
- ES5-style trailing commas.

## Module Resolution

To maintain clean and scalable import paths, this project implements the `babel-plugin-module-resolver`. Use the following aliases to avoid deep relative nesting:

- **`@` or `@root`**: Maps to the `./src` directory.
  ```javascript
  // Avoid deep relative paths:
  import Car from '../../../src/car'

  // Use clean aliases:
  import Car from '@/car'
  // or
  import Car from '@root/car'
  ```
- **`@tests`**: Maps to the `./tests` directory.
  ```javascript
  // Avoid deep relative paths:
  import { testHelper } from '../../../tests/helpers'

  // Use clean aliases:
  import { testHelper } from '@tests/helpers'
  ```

## Project Structure

```
.
├── src/              # Source code directory
│   ├── index.js      # Application entry point
│   └── car.js        # Car class (ES6 module)
├── dist/             # Compiled production output (auto-generated)
├── eslint.config.mjs # ESLint flat configuration
├── .prettierrc      # Prettier configuration
├── babel.config.js  # Babel transpilation settings
├── package.json     # Project metadata and scripts
├── nodemon.json     # Nodemon orchestration settings
├── LICENSE.txt      # License information
└── ...
```

## License

See [`LICENSE`](LICENSE) for details.
