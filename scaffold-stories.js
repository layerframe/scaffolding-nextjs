const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldComponent = require('./scaffolding/scaffold-story-component');

const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
const dirs = pkg.directories;

module.exports = () => {
  const argv = minimist(process.argv.slice(2));
  const destPath = argv.path || argv.name;
  return scaffoldComponent({
    name: argv.name,
    path: destPath,
    src: path.resolve(__dirname, 'scaffolding/component-stories'),
    dest: path.resolve(pkgpath.self(), dirs.src, 'components', destPath)
  });
}
