/**
 * @file bin/scaffold-stories.js
 * Handles scaffolding a Storybook story.
 */
const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldComponent = require('./scaffolding/scaffold-story-component');

const PACKAGE_PATH = pkgpath.parent() || pkgpath.self()

const pkg = require(path.resolve(PACKAGE_PATH, 'package.json'));
const dirs = pkg.directories;

module.exports = () => {
  const argv = minimist(process.argv.slice(2));
  const destPath = argv.path || argv.name;
  return scaffoldComponent({
    name: argv.name,
    path: destPath,
    src: path.resolve(__dirname, 'scaffolding/component-stories'),
    dest: path.resolve(PACKAGE_PATH, dirs.src, 'components', destPath)
  });
}
