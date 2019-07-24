require('@babel/core');
require('@babel/polyfill');
const shell = require('shelljs');

const { requiresGit } = require('./utilities/git');

(async (): Promise<void> => {
  requiresGit();

  // if everything went well so far, let's end this script
  shell.exit(0);

  return;
})();
