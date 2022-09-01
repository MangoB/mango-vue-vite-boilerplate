import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    chromeWebSecurity: false,
    // specPattern: 'src/tests/e2e/**/*.spec.*',
    supportFile: false,
  },
})
