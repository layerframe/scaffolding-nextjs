/**
 * @file bin/scaffold-page-component.js
 * Handles scaffolding a page component.
 */
const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldComponent = require('./scaffolding/scaffold-component');

const PACKAGE_PATH = pkgpath.parent() || pkgpath.self()

const pkg = require(path.resolve(PACKAGE_PATH, 'package.json'));
const dirs = pkg.directories;

const createClassName = name => {
  // Force uppercase to build the className
  const cleanName = `${name[0].toUpperCase()}${name.slice(1,name.length)}`
  console.log(cleanName)
  // transforms PascalCase into slug-case for the CSS class name
  return cleanName
    .replace(/[A-Z]/g, word => '-' + word.toLowerCase())
    .substring(1); // trim off leading - from the first capital
}

module.exports = () => {
  const argv = minimist(process.argv.slice(2));
  const destPath = argv.path || argv.name;

  return scaffoldComponent({
    name: argv.name,
    src: path.resolve(__dirname, 'scaffolding/page-component'),
    path: destPath,
    dest: path.resolve(PACKAGE_PATH, dirs.src, 'pages', createClassName(argv.name).toLowerCase())
  });
}
