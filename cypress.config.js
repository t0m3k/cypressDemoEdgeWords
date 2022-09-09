const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ndmvsm",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    cypressMochaawesomeReporterReporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Steve's Report",
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results-[hash].xml",
    },
  },

  // reporter: "junit",
  // reporterOptions: {
  //   mochaFile: "cypress/results/junit-result-[hash].xml",
  //   toConsole: true,
  // },
  e2e: {
    baseUrl: "https://www.edgewordstraining.co.uk/demo-site",
    setupNodeEvents(on, config) {
      const {
        beforeRunHook,
        afterRunHook,
      } = require("cypress-mochawesome-reporter/lib");
      const exec = require("child_process").execSync;

      // implement node event listeners here
      on("before:run", async (details) => {
        console.log("override before:run");
        await exec("rm -rf cypress/screenshots");

        await exec("rm -rf cypress/reports");

        await beforeRunHook(details);
      });
      on("after:run", async () => {
        console.log("override after:run");
        await exec(
          "npx jrm ./cypress/reports/junitreport.xml ./cypress/reports/junit/*.xml"
        );
        await afterRunHook();
      });
    },
  },
});
