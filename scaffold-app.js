/**
 * @file bin/scaffold-app.js
 */
const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldApp = require('./scaffolding/scaffold-app');

const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
const dirs = pkg.directories;

module.exports = () => {
  // const argv = minimist(process.argv.slice(2));
  return scaffoldApp({
    // name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/app'),
    dest: path.resolve(pkgpath.self(), dirs.src, 'pages')
  });
}
