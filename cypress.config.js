const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 30000,
    viewportHeight: 900,
    viewportWidth: 1400,
    projectId: "emjm2h",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
