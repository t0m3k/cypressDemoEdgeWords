const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.edgewordstraining.co.uk/demo-site",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
