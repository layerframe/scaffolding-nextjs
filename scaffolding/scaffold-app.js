/*
  Enables scaffolding of new FC items (e.g. components, tags) using the dopl templating library.
  See the stateless-component folder for the template source files.
*/

// const chalk = require('chalk');
const dopl = require('dopl');

module.exports = ({
  src,
  dest
}) => {

  return dopl({
    output: dest,
    src: src,
    data: {
    }
  });
}
