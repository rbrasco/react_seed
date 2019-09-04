const zip = require('gulp-zip');
const paths = require('./paths');
const { production } = require('./build');
const { clean } = require('./helpers');
const template = require('gulp-template');
const { src, dest, series, parallel } = require('gulp');

const version = () => {
  // Current time
  const date = new Date();

  // Package parameters
  const {
    name,
    version,
  } = require('../package.json');

  // File data
  const data = {
    pkg: { name, version },
    env: process.env,
    process: process,
    time: date.toString(),
  };

  // Write version file
  return src(`${paths.global.BUILD_TEMPLATES}/version.txt`)
    .pipe(template(data))
    .pipe(dest(paths.global.global.dist));
}

const zipBuild = () => {

  // Package parameters
  const { name } = require('../package.json');

  return src(`${paths.global.DEST}/**/*`)
  .pipe(zip(`${name}.zip`))
  .pipe(dest(paths.global.RELEASE));
}

const copyConfig = () => {

  return src(`${paths.global.CONFIG_SRC}/**/*`)
  .pipe(dest(paths.global.RELEASE));
}

const publish = series(
  (cb) => { clean(paths.global.RELEASE); cb() },
  production,
  version,
  parallel(zipBuild, copyConfig),
);

module.exports = {
  publish,
}