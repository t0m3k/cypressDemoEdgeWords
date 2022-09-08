const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ndmvsm",
  reporter: "junit",
  reporterOptions: {
    mochaFile: "cypress/results/junit-result-[hash].xmpl",
    toConsole: true,
  },
  e2e: {
    baseUrl: "https://www.edgewordstraining.co.uk/demo-site",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
