/**
 * @file bin/scaffold-component.js
 */
const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldContext = require('./scaffolding/scaffold-context');

const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
const dirs = pkg.directories;

module.exports = () => {
  const argv = minimist(process.argv.slice(2));
  return scaffoldContext({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/context-component'),
    dest: path.resolve(pkgpath.self(), dirs.src, 'contexts', argv.name + 'Context')
  });
}
