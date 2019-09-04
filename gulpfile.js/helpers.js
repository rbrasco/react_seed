const del = require('del');
const path = require('path');
const { src, dest } = require('gulp');
const notify = require('gulp-notify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const watchify = require('watchify');
const streamify = require('gulp-streamify');

/**
 * Used to create the notification options to be used by gulp-notify
 *
 * @param   {String}  title   The title of the notification
 * @param   {String}  message The message of the notification
 * @param   {boolean} [isError=false] If the message is an error
 * @param   {Boolean} onLast  If the notification should only happen on the last file of the stream
 * @returns {Object}          Notification options
 */
const notification = (title, message, isError = false, onLast) => {

  if (!message) {

    message = title;
    title   = 'Notification';
  
}

  return {
    title,
    message,
    sound : 'Frog',
    icon  : path.join(__dirname, `images/project-logo${isError ? '-error' : ''}.png`),
    onLast,
  };

};

/**
   * Notification plugin
   */
const gulpNotify = (title, message, isError = false) => {

  return src('./')
    .pipe(
      notify(notification(title, message, isError))
    );

};

/**
 * Delete content of folder
 * @param {string} path
 */
const clean = (path) => del([path]);

const createBundle = (browserifyOpts, bundleFilename, destiny) => {

  return browserify(browserifyOpts)
    .bundle()
    .pipe(source(bundleFilename))
    //.pipe(streamify(uglify()))
    .pipe(dest(destiny));

};
const createWatcher = (browserifyOpts) => {

  return watchify(browserify(browserifyOpts));

};

const bundleWatcher = (watcher, out, dest_src) => {

  return watcher.bundle()
    .pipe(source(out))
    .pipe(dest(dest_src));


};

/**
 * Arguments for CLI
 */
const getCommandArguments = () => {

  return require('yargs')
    .alias('production',         'prod')
    .describe('production',      'To minify, uglify and many other things for production')
    .argv;

};

/**
 * Export
 */
module.exports = {
  clean,
  gulpNotify,
  createBundle,
  createWatcher,
  bundleWatcher,
  getCommandArguments,
};
