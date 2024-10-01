// vitest.config.js
/// <reference types="vitest" />
const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [vue(), vueJsx()],
  test: {
    globals: true,
    environment: 'jsdom'
  }
})

// "test": "vitest --coverage"
