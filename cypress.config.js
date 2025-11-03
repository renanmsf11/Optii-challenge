
const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({

  video: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  e2e: {
    
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    viewPortHeight: 900,
    viewportWidth: 1400,
    specPattern: [
      'cypress/e2e/api/**/*.cy.{js,ts}',  // API tests
      '**/*.feature',                     // Cucumber tests
    ],
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome-report",
      overwrite: false,
      html: true,
      json: true},

    env: {
      cucumber: {
        step_definitions: "cypress/support/step_definitions"
      }
    }
  },
});
