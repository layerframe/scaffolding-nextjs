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

if (program.api) run('./' + scriptPrefix + '-api-component', function(err) {
  if (err) throw err;
  console.log('finished running', scriptPrefix + '-api-component');
});

if (program.component) run('./' + scriptPrefix + 'component', function(err) {
  if (err) throw err;
  console.log('finished running', scriptPrefix + '-component');
});
