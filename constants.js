/**
 * @file constants.js
 * A collection of constants used throughout the scaffolds.
 */
const pkgpath = require('packpath');
const path = require('path');

module.exports = {
  /**
   * getPackagePath
   * @param {bool} self
   */
    getPackagePath: function (self = false) {
      if (self) {
        return pkgpath.self()
      }
      try {
        return path.resolve(__dirname, '../../../')
      } catch (err) {
        console.error('There was an error finding the package.json path.', err)
      }
    },
  /**
   * getPackageVersion
   * Handles getting the package version
   */
    getPackageVersion: function () {
      try {
        const pkg = require(path.resolve(pkgpath.self(), 'package.json'));
        return pkg.version
      } catch (err) {
        console.error('There was an error finding the package.json version.', err)
      }
    },
  /**
   * dirs
   * Fetches the directories content from package.json
   * @param {string} dirPathName is the name of the directories key in package.json
   */
    dirs: function (dirPathName = 'directories') {
      const pkg = require(path.resolve(pkgpath.parent(), 'package.json'));
      return pkg[dirPathName];
    }
}
