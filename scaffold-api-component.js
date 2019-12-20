/**
 * @file scaffold-api-component.js
 * Handles generating a standard API component.
 */
const path = require('path');
const minimist = require('minimist');
const scaffoldComponent = require('./scaffolding/scaffold-component');

const constants = require('./constants');

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs().src

const createClassName = name => {
  // Force uppercase to build the className
  const cleanName = `${name[0].toUpperCase()}${name.slice(1,name.length)}`
  // transforms PascalCase into slug-case for the CSS class name
  return cleanName
    .replace(/[A-Z]/g, word => '-' + word.toLowerCase())
    .substring(1); // trim off leading - from the first capital
}

module.exports = function () {
  const argv = minimist(process.argv.slice(2));
  const destPath = argv.path || argv.name;
  return scaffoldComponent({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/api-component'),
    path: destPath,
    dest: path.resolve(
      PACKAGE_PATH,
      SOURCE_DIR,
      'pages',
      'api',
      createClassName(argv.name).toLowerCase()
    )
  });
}()
