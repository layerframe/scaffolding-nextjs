/**
 * @file bin/scaffold-context.js
 * Handles scaffolding a basic context-based component.
 */
const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldContext = require('./scaffolding/scaffold-context');

const PACKAGE_PATH = pkgpath.parent() || pkgpath.self()

const pkg = require(path.resolve(PACKAGE_PATH, 'package.json'));
const dirs = pkg.directories;

module.exports = () => {
  const argv = minimist(process.argv.slice(2));
  return scaffoldContext({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/context-component'),
    dest: path.resolve(PACKAGE_PATH, dirs.src, 'contexts', argv.name + 'Context')
  });
}
