# Mango Boilerplate (Vue + Vite)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/MangoB/mango-vue-vite-boilerplate/blob/main/LICENSE.md)

Opinionated Vue 3 + Vite starter template.

<br>

## What's inside

- 🎑 [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework

- 🏳️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling

- 📦 [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

- 🍍 [Pinia](https://pinia.vuejs.org/) - Vue Store that you will enjoy using

- 🛣️ [Vue Router](https://router.vuejs.org/) - The official router for Vue.js.

- 🎨 [Vuetify 3](https://next.vuetifyjs.com/en/) - Vue UI Library with beautifully handcrafted Material Components.

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest)

- 🌲 E2E Testing with [Cypress](https://cypress.io/)

- 🗃️ [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - Auto import APIs on-demand for Vite and etc. With TypeScript support.

- 🗄️ [Components auto importing](https://github.com/antfu/unplugin-vue-components) - On-demand components auto importing for Vue.

- ✨ Use the [new `<script setup>` syntax](https://vuejs.org/api/sfc-script-setup.html#basic-syntax)

- 💪 Written in [TypeScript](https://vuejs.org/guide/typescript/overview.html#using-vue-with-typescript)

- 🌀 [Path Aliasing](./vite.config.ts) - `@/` is aliased to `./src/` folder.

- 🍱 [Layout system](./src/layouts)

- 🤙🏻 [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled

- ⭕🟥🔺 [PostCSS](https://postcss.org/)

<br>

## Requirements

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/installation) (Recommended) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) or [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

<br>

## Getting Started

Just fork it.

<br>

Or clone from this template by terminal

```bash
git clone https://github.com/MangoB/mango-vue-vite-boilerplate.git
cd mango-vue-vite-boilerplate.
# If you don't have pnpm installed, run: npm install -g pnpm
pnpm i 
pnpm dev
```

The app will become available at [http://localhost:5173/](http://localhost:5173/).

<br>

## Usage

### Development

Just run and visit [http://localhost:5173](http://localhost:5173)

```bash
pnpm dev
```

### Build

To build the App

```bash
pnpm build
```

### Preview

Locally preview production build

```bash
pnpm serve
```

### Check ESlint

Check ESlint rules for all files

```bash
pnpm lint
```

### Fix ESlint

Automatically fix ESlint problems

```bash
pnpm lint:fix
```


### Run test

Run unit and integration tests with the Vitest

```bash
pnpm test
```


### Run E2E test

run all e2e tests with the Cypress Test

```bash
pnpm test:e2e
```
