#!/usr/bin/env node

/**
 * @file index.js
 * Tool configuration.
 * @see https://www.npmjs.com/package/commander
 */
const commander = require('commander');
const path = require('path');
const colors = require('colors');
const { exec } = require('child_process');

// Local
const constants = require('./constants');

// Create the program
const program = new commander.Command();

const scriptPrefix = 'scaffold'

program.version(constants.getPackageVersion());

program
  .name('foldit')
  .option('-d, --debug', 'output extra debugging')
  .option('-a, --api <name>', 'an API page component')
  .option('-c, --component <name>', 'a stateless component')
  .option('-x, --context <name>', 'a context component')
  .option('-p, --page <name>', 'a page component')
  .option('-s, --story <name>', 'a Storybook component');

program.parse(process.argv);

console.log(colors.blue('\n-------------------------------'));
console.log(colors.blue('--- NextJS Scaffold Details ---'));
console.log(colors.blue('-------------------------------\n'));

if (program.debug) console.log(program.opts());

/**
 * runScript
 * @param {string} name name of the script (minus the separator and the name)
 * @param {string} options options to pass to the script
 *  * @param {string} sep space separator in script name. Defaults to '-'
 */
const runScript = function (name, options, ignoreName = false, sep = '-') {
  let finalExec = `node ${path.resolve(__dirname, `${scriptPrefix}${sep}${name}`)} --name ${options}`
  if (ignoreName) {
    finalExec = `node ${path.resolve(__dirname, `${scriptPrefix}${sep}${name}`)}`
  }
  console.log('Executing command...', finalExec)
  return exec(finalExec, (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
  });
}

// Build an API component
if (program.api) runScript('api-component', program.api);

// Build a stateless component
// if (program.component) runScript('component', program.component);

// // Build a context component
// if (program.context) runScript('context', program.context);

// // Build a page component
// if (program.page) runScript('page-component', program.page);

// // Build a story component
// if (program.story) runScript('stories', program.story);
