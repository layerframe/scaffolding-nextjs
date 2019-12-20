/**
 * @file bin/scaffold-component.js
 * Handles scaffolding a basic stateless component.
 */
const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldComponent = require('./scaffolding/scaffold-component');

const constants = require('./constants');

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs()

module.exports = () => {
  const argv = minimist(process.argv.slice(2));
  return scaffoldComponent({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/stateless-component'),
    dest: path.resolve(PACKAGE_PATH, SOURCE_DIR, 'components', argv.name)
  });
}
