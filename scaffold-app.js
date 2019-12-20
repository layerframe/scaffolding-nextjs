/**
 * @file bin/scaffold-app.js
 * Handles scaffolding an _app file.
 */
const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldApp = require('./scaffolding/scaffold-app');

const constants = require('./constants');

const PACKAGE_PATH = constants.getPackagePath()
const SOURCE_DIR = constants.dirs()

module.exports = () => {
  // const argv = minimist(process.argv.slice(2));
  return scaffoldApp({
    // name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/app'),
    dest: path.resolve(PACKAGE_PATH, SOURCE_DIR, 'pages')
  });
}
