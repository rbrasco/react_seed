const htmlreplace = require('gulp-html-replace');
const babelify = require('babelify');
const paths = require('./paths');
const { src, dest } = require('gulp');
const { series } = require('gulp');
const { clean, gulpNotify, createBundle } = require('./helpers');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const scssify = require('scssify');

const cleanDist = () => clean(paths.global.DEST);

const replaceHTML = () => {

  return src(paths.global.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + paths.global.MINIFIED_OUT_JS,
      'css' : 'build/' + paths.global.MINIFIED_OUT_CSS,
    }))
    .pipe(dest(paths.global.DEST));

};

sass.compiler = require('node-sass');

const buildSass = () => {

  return src(paths.global.SASS.root)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest(paths.global.OUT));

};

const build = series(
  cleanDist,
  buildSass,
  () => createBundle({
    entries: [paths.global.ENTRY_POINT],
    transform: [babelify],
  }, paths.global.MINIFIED_OUT_JS, paths.global.BUILD_TEMPLATES),
  replaceHTML,
  () => gulpNotify('Build finished!')
);


const production = series(
  replaceHTML,
  build
);

module.exports = {
  production,
  build,
  replaceHTML,
};
