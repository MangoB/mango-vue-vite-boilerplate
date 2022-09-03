# Mango Boilerplate
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/MangoB/mango-boilerplate/blob/main/LICENSE.md)

Opinionated Vue 3 + Vite starter template.

<br>


## Features

- 🎑 [Vue 3](https://vuejs.org/) - The Progressive
JavaScript Framework

- 🏳️ [Vite 3](https://vitejs.dev/) - Next Generation Frontend Tooling

- 📦 [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

- 🍍 [Pinia](https://pinia.vuejs.org/) - Vue Store that you will enjoy using

- 🛣️ [Vue Router](https://router.vuejs.org/) - The official router for Vue.js.

- 🎨 [Vuetify](https://next.vuetifyjs.com/en/) - Vue UI Library with beautifully handcrafted Material Components.

- 🗃️ [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - Auto import APIs on-demand for Vite and etc. With TypeScript support.

- 🗄️ [Components auto importing](https://github.com/antfu/unplugin-vue-components) - On-demand components auto importing for Vue.

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest)

- 🌲 E2E Testing with [Cypress](https://cypress.io/)

- ✨ Use the [new `<script setup>` syntax](https://vuejs.org/api/sfc-script-setup.html#basic-syntax)

- 💪 Written in [TypeScript](https://vuejs.org/guide/typescript/overview.html#using-vue-with-typescript)


- 🌀 [Path Aliasing](./vite.config.ts) - `@/` is aliased to `./src/` folder.

- 🍱 [Layout system](./src/layouts)

- 🤙🏻 [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled


<br>


## Requires!

> Vue 3 requires Node.js version 15.0 or higher
>
> Vite requires Node.js version 14.18+, 16+


<br>


### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
git clone https://github.com/MangoB/mango-boilerplate.git
cd mango-boilerplate.
# If you don't have pnpm installed, run: npm install -g pnpm
pnpm i 
```


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


### Run E2E

run all e2e tests with the Cypress Test

```bash
pnpm test:e2e
```
