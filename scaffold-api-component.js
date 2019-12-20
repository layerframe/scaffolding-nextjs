const path = require('path');
const pkgpath = require('packpath');
const minimist = require('minimist');
const scaffoldComponent = require('./scaffolding/scaffold-component');

const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
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
    src: path.resolve(__dirname, 'scaffolding/api-component'),
    path: destPath,
    dest: path.resolve(pkgpath.self(), dirs.src, 'pages', 'api', createClassName(argv.name).toLowerCase())
  });
}
