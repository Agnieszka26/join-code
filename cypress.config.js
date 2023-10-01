import { defineConfig } from 'cypress';

module.exports = defineConfig({
  projectId: 'xe16wz',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
