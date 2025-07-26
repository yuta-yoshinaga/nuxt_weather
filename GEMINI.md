# GEMINI.md

This file provides guidance to GEMINI when working with code in this repository.

## Common Commands

This project uses `npm` as its package manager.

- **Install dependencies:**
  ```bash
  npm install
  ```

- **Run the development server:**
  The `README.md` suggests using Docker for local development.
  ```bash
  docker-compose up -d
  ```
  Alternatively, you can run the Nuxt development server directly:
  ```bash
  npm run dev
  ```

- **Lint the code:**
  The project uses ESLint for code quality.
  ```bash
  npm run lint
  ```

- **Build for production:**
  ```bash
  npm run build
  ```

## High-Level Architecture

This is a Nuxt.js v2 single-page application (`ssr: false`) that functions as a weather forecast viewer.

### View/Page Management

The application does not use Nuxt's standard file-based routing for navigating between the main list and detail views. Instead, it employs a dynamic component pattern within `pages/index.vue`.

- **`pages/index.vue`**: Acts as a controller that renders either the `List` or `Detail` component based on state managed in Vuex.
- **Vuex Store**: The primary driver for UI state. It holds the `current` component to display (`list` or `detail`). Actions like `this.$store.dispatch("setCurrent", "detail")` are used to switch between views.
- **`components/List.vue`**: The main view, showing a list of weather forecasts.
- **`components/Detail.vue`**: The detail view, showing specific information for a selected day.

### Data Fetching

The application fetches weather data from a third-party API: `https://weather.tsukumijima.net/` (a Livedoor Weather compatible API). The `@nuxtjs/axios` module is used for making the API calls. All API interaction logic is managed within the Vuex store.

### Code Structure

- **Components**: Components are organized into `components/` and `components/Parts/`. The `Parts` directory contains smaller, reusable sub-components.
- **Mixins**: A shared mixin at `components/mixin.js` is used across several components to provide common helper methods for accessing weather data from the Vuex store.
- **CI/CD**: GitHub Actions are configured in `.github/workflows/`. Notably, `release-tag.yml` automates version bumping and release creation upon pushes to the `master` branch.