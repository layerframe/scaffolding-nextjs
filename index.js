/**
 * @file index.js
 * Tool configuration.
 * @see https://www.npmjs.com/package/commander
 */
const commander = require('commander');
// const colors = require('colors');

const constants = require('./constants');
const run = require('./run').default;

// Create the program
const program = new commander.Command();

const scriptPrefix = 'scaffold'

console.log('constants.getPackagePath(true)', constants.getPackagePath(true))
program.version(constants.getPackagePath(true).version);

program
  .name('foldit')
  .option('-d, --debug', 'output extra debugging')
  .option('-a, --api <name>', 'an API page component')
  .option('-c, --component <name>', 'a stateless component')
  .option('-x, --context <name>', 'a context component')
  .option('-p, --page <name>', 'a page component')
  .option('-s, --story <name>', 'a Storybook component');

program.parse(process.argv);

if (program.debug) console.log(program.opts());
console.log('NextJS Scaffold Details:');

if (program.api) console.log('Building an API scaffold.')

/**
 * runScript
 * @param {string} name name of the script (minus the separator and the name)
 * @param {string} sep space separator in script name. Defaults to '-'
 */
const runScript = function (name, sep = '-') {
  return run(`./${scriptPrefix}${sep}${path}`, function(err) {
    if (err) throw err;
    return colors.green('Finished running', `${scriptPrefix}${sep}${name}`);
  });
}

// Build an API component
if (program.api) runScript('api-component');

// Build a stateless component
if (program.component) runScript('component');

// Build a context component
if (program.component) runScript('context');

// Build a page component
if (program.component) runScript('page-component');

// Build a story component
if (program.component) runScript('stories');
