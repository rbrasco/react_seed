/* eslint-disable no-console */
const paths = require('./paths');
const { src } = require('gulp');
const { series, watch } = require('gulp');
const eslint = require('gulp-eslint');
const { build } = require('./build');


const watchIt = () => {

  // eslint-disable-next-line max-len
  watch([
    paths.global.HTML,
    paths.global.JS.root,
    paths.global.JS.pages,
    paths.global.JS.utils,
    paths.global.JS.gulp,
    paths.global.JS.components,
    paths.global.JS.header,
    paths.global.JS.component,
    paths.global.JS.hoc,
    paths.global.JS.redux.session,
    paths.global.SASS.root,
    paths.global.SASS.pages,
    paths.global.SASS.components,
    paths.global.SASS.header,
    paths.global.SASS.component,
  ], series(build));

};

const RunEslint = () => {

  return src(['src/js/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.result(result => {

      // Called for each ESLint result.
      // eslint-disable-next-line no-console
      console.log(`ESLint result: ${result.filePath}`);
      console.log(`# Messages: ${result.messages.length}`);
      console.log(`# Warnings: ${result.warningCount}`);
      console.log(`# Errors: ${result.errorCount}`);

    }));

};

module.exports = {
  watchIt,
  RunEslint,
};
