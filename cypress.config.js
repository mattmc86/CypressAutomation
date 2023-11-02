
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');

async function setupNodeEvents(on, config) {

  config.db =  {
    userName: "rsa",
    password: "George0803",
    server: "mattcypressserver.database.windows.net",
    options: {
        database: "CypressAuto",
        encrypt: true,
        rowCollectionOnRequestCompletion: true
    }
}
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  retries: {
    runMode: 1,

  },
  projectId: "boatew",

  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/'

  },
});

//messages -> json file ->html