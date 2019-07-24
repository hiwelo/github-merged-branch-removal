const shell = require('shelljs');

export const requiresGit = (): boolean => {
  // early-termination if git is available
  if (shell.which('git')) return true;

  shell.echo('Sorry, this script requires git');
  shell.exit(1);

  return false;
};
