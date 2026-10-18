# React App Template

A reusable React and TypeScript application template for building modern frontend applications with a consistent development environment, project structure, and architecture.

The goal of this project is to provide a reliable starting point for new applications while reducing repetitive project setup and establishing reusable patterns for routing, UI, server-state management, API integration, and testing.

## Current Stack

### Core

- React
- TypeScript
- Vite

### UI

- Material UI
- Emotion

### Routing

- React Router

### Server State

- TanStack Query
- TanStack Query Devtools

### API

- Axios

### Testing

- Vitest
- React Testing Library
- jest-dom
- user-event
- jsdom
- Mock Service Worker (MSW)

### Code Quality

- ESLint
- Prettier

## Getting Started

### Prerequisites

- Node.js
- npm

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a local `.env` file using `.env.example` as a reference.

```text
VITE_API_BASE_URL=http://localhost:8080/api
```

`VITE_API_BASE_URL` defines the base URL used by the application's Axios HTTP client.

The local `.env` file is not committed to source control. `.env.example` documents the environment variables required by the application.

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

Runs the TypeScript compiler and creates a production build with Vite.

### Test

```bash
npm run test
```

Runs the Vitest test suite.

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

### Quality Gate

```bash
npm run gate
```

Runs the project's verification checks:

1. Prettier formatting check
2. ESLint
3. Vitest
4. Production build

The quality gate is non-mutating and is intended to verify that the application is ready to be committed or submitted for review.

### Preview

```bash
npm run preview
```

Locally previews the production build.

## Project Structure

The template separates application responsibilities into focused directories.

```text
src/
├── api/
│   └── httpClient.ts
├── components/
│   ├── __test__/
│   └── ExampleList.tsx
├── hooks/
│   ├── __test__/
│   └── useExamples.ts
├── layouts/
│   └── AppLayout.tsx
├── mocks/
│   ├── handlers.ts
│   └── server.ts
├── pages/
│   ├── __test__/
│   ├── HomePage.tsx
│   └── NotFoundPage.tsx
├── providers/
│   ├── AppProviders.tsx
│   ├── MUIProvider.tsx
│   └── QueryProvider.tsx
├── routes/
│   ├── __test__/
│   └── router.tsx
├── services/
│   └── ExampleService.ts
├── test/
│   ├── setup.ts
│   └── testUtils.tsx
├── theme/
│   └── theme.ts
└── main.tsx
```

Directories are added when a distinct application responsibility requires them rather than creating unused architectural layers in advance.

## Application Architecture

The template follows a layered approach that separates UI, server-state management, API services, and HTTP configuration.

A typical server-state flow is:

```text
Page
  ↓
Component
  ↓
Custom Query Hook
  ↓
Service
  ↓
HTTP Client
  ↓
API
```

The included example follows this structure:

```text
HomePage
  ↓
ExampleList
  ↓
useExamples
  ↓
ExampleService
  ↓
httpClient
```

This keeps components independent of HTTP implementation details and gives each layer a focused responsibility.

## Application Providers

Application-wide providers are composed through `AppProviders`.

Currently configured providers include:

- TanStack Query
- Material UI

`AppProviders` keeps global provider composition separate from application routing.

The router is mounted separately through `RouterProvider` in `main.tsx`.

## Material UI

Material UI is configured as the application's UI system.

The template includes:

- A centralized MUI theme
- `ThemeProvider`
- `CssBaseline`
- A reusable `MUIProvider`

Global theme configuration is located in:

```text
src/theme/theme.ts
```

MUI provider configuration is located in:

```text
src/providers/MUIProvider.tsx
```

## Routing

Routing uses React Router's Data Mode with `createBrowserRouter` and `RouterProvider`.

Routes are defined in:

```text
src/routes/router.tsx
```

The route configuration currently includes:

- Root route
- `HomePage`
- `NotFoundPage`
- Shared `AppLayout`

`AppLayout` uses React Router's `Outlet` to render child routes inside the common application layout.

Route objects are exported separately from the browser router so the same route configuration can be tested with `createMemoryRouter`.

## Server-State Management

TanStack Query manages asynchronous server state.

Configuration is provided through:

```text
src/providers/QueryProvider.tsx
```

The provider creates the application's `QueryClient`, supplies it through `QueryClientProvider`, and includes TanStack Query Devtools.

Server requests are exposed to components through custom query hooks.

For example:

```text
useExamples
  ↓
getExamples
  ↓
httpClient
```

This prevents components from making HTTP requests directly.

## API Architecture

### HTTP Client

Axios configuration is centralized in:

```text
src/api/httpClient.ts
```

The client uses:

```text
VITE_API_BASE_URL
```

as its base URL.

The Axios client is currently configured to use the Fetch adapter. This allows requests to be intercepted by MSW during Vitest tests running in jsdom. Without this configuration, Axios selected its XHR adapter and the MSW Node server did not intercept the requests in the current test environment.

### Services

API operations are separated into service modules.

For example:

```text
src/services/ExampleService.ts
```

The example service uses the shared Axios client and returns application data rather than exposing the complete Axios response to consumers.

Components do not directly depend on Axios.

## Testing

The template uses Vitest and React Testing Library.

The Vitest environment is configured with:

```text
jsdom
```

Global test setup is located in:

```text
src/test/setup.ts
```

### Testing Philosophy

Tests focus on application behavior and user-visible outcomes rather than implementation details.

React Testing Library queries favor semantic elements and accessible roles where appropriate.

The current test coverage demonstrates several levels of testing.

### Component Tests

Components are tested for user-visible behavior.

`ExampleList` verifies:

- Loading state
- Successful API response
- Error state

### Query Hook Tests

`useExamples` is tested against mocked HTTP responses to verify:

- Successful requests expose returned data
- Failed requests produce a query error state

### Routing Tests

Routing is tested using:

```text
createMemoryRouter
```

This allows route behavior to be verified without using the browser's URL history.

Current routing tests verify:

- The root route renders the home page
- An unknown route renders the not-found page

## Mock Service Worker

Mock Service Worker (MSW) provides API mocking for tests.

Mock handlers are defined in:

```text
src/mocks/handlers.ts
```

The Node test server is configured in:

```text
src/mocks/server.ts
```

The test lifecycle starts MSW before tests, resets runtime handler overrides after each test, and closes the server after the test suite.

Default handlers can represent normal API behavior, while individual tests can override responses with `server.use()`.

For example:

```text
GET /examples
    │
    ├── 200 → example data
    │
    └── 500 → error state
```

This allows success and failure scenarios to be tested without modifying production application code or requiring a running backend.

## Test Utilities

Shared testing infrastructure is located in:

```text
src/test/testUtils.tsx
```

The current query wrapper creates a new `QueryClient` for each use and disables query retries during tests.

Using a fresh query client helps prevent cached server state from leaking between tests.

React Testing Library cleanup and MSW handler resets are performed between tests to maintain test isolation.

## Development Environment

The repository includes workspace-level VS Code configuration under:

```text
.vscode/
```

### Recommended Extensions

- ESLint
- Prettier

Workspace settings define project-specific editor behavior.

Formatting rules are defined in:

```text
.prettierrc
```

Linting rules are defined in:

```text
eslint.config.js
```

TypeScript, Vite, ESLint, and Prettier remain responsible for their respective project configuration rather than duplicating those rules in editor settings.

## Code Formatting

Prettier provides consistent project formatting.

The project currently uses formatting rules including:

- Single quotes
- Single quotes in JSX
- Semicolons
- ES5 trailing commas
- 2-space indentation
- 140-character print width

Use:

```bash
npm run format
```

to modify files or:

```bash
npm run format:check
```

to verify formatting without changing files.

## Quality Gate

Before committing or opening a pull request, run:

```bash
npm run gate
```

The gate verifies:

```text
Formatting
    ↓
Linting
    ↓
Tests
    ↓
Production Build
```

A successful gate confirms that formatting, static analysis, tests, TypeScript compilation, and the Vite production build all complete successfully.

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

5. Create the application's local `.env` file based on `.env.example`.
6. Update `VITE_API_BASE_URL` for the application's API.
7. Start the development server:

   ```bash
   npm run dev
   ```

Each application created from this template has its own Git history and can evolve independently.

## Current Example

The template currently includes a small `Example` implementation used to demonstrate the architecture.

It provides a working reference for:

- Axios API requests
- Service-layer separation
- TanStack Query hooks
- Loading states
- Error states
- Successful data rendering
- MSW API mocking
- Hook testing
- Component testing

The example exists as an architectural reference and can be replaced with application-specific functionality when creating a new project from the template.

## Status

This template is under active development.

The current foundation includes:

- React and TypeScript application setup
- Vite development and production builds
- ESLint and Prettier
- Vitest and React Testing Library
- Material UI and application theming
- React Router
- TanStack Query
- Axios API architecture
- Environment-based API configuration
- Mock Service Worker
- API success and failure testing
- Component loading, success, and error states
- Reusable testing utilities
- Automated quality gate

Additional architecture will continue to be introduced incrementally as concrete application responsibilities require it.
