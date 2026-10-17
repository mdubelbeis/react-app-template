# React App Template

A reusable React and TypeScript application template for building modern frontend applications with a consistent development environment, project structure, and architecture.

The goal of this project is to provide a reliable starting point for new applications while reducing repetitive project setup and configuration.

## Current Stack

- React
- TypeScript
- Vite
- ESLint
- Prettier

Additional application tooling and architectural patterns will be added incrementally as the template evolves.

## Getting Started

### Prerequisites

- Node.js
- npm

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Build

```bash
npm run build
```

Runs the TypeScript compiler and creates a production build.

### Lint

```bash
npm run lint
```

Runs ESLint against the project.

### Format

```bash
npm run format
```

Formats the project using Prettier.

### Check Formatting

```bash
npm run format:check
```

Checks whether files conform to the project's Prettier configuration without modifying them.

### Preview

```bash
npm run preview
```

Locally previews the production build.

## Development Environment

The repository includes workspace-level VS Code configuration under `.vscode/`.

### Recommended Extensions

- ESLint
- Prettier

Project formatting rules are defined in `.prettierrc`, while linting rules are defined in `eslint.config.js`.

## Using This Template

This repository is intended to be used as a GitHub template repository.

To create a new application:

1. Select **Use this template** on GitHub.
2. Create a new repository from the template.
3. Clone the new repository.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

Each application created from this template has its own Git history and can evolve independently.

## Status

This template is under active development.

Application architecture, testing, routing, state management, API integration, UI components, and other development patterns will be added incrementally.

Contributions and feedback are welcome to help improve this template.
