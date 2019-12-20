/**
 * @file bin/scaffold-component.js
 * Handles scaffolding a basic stateless component.
 */
const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldComponent = require('./scaffolding/scaffold-component');

const PACKAGE_PATH = pkgpath.parent() || pkgpath.self()

const pkg = require(path.resolve(PACKAGE_PATH, 'package.json'));
const dirs = pkg.directories;

module.exports = () => {
  const argv = minimist(process.argv.slice(2));
  return scaffoldComponent({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/stateless-component'),
    dest: path.resolve(PACKAGE_PATH, dirs.src, 'components', argv.name)
  });
}
