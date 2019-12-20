/**
 * @file bin/scaffold-app.js
 * Handles scaffolding an _app file.
 */
const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldApp = require('./scaffolding/scaffold-app');

const PACKAGE_PATH = pkgpath.parent() || pkgpath.self()

const pkg = require(path.resolve(PACKAGE_PATH, 'package.json'));
const dirs = pkg.directories;

module.exports = () => {
  // const argv = minimist(process.argv.slice(2));
  return scaffoldApp({
    // name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/app'),
    dest: path.resolve(PACKAGE_PATH, dirs.src, 'pages')
  });
}
