const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      snapshotOnly: true
    }
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  reporterOptions: {
    reportDir: 'cypress/reports'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
},
});
