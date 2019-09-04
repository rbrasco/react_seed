const { series } = require('gulp');
const KarmaServer = require('karma').Server;
/**
 * UNIT Test
 * @param {function} cb
 */
const unitTesting = cb => {
  const karmaConfig = {
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true,
    autoWatch: false,
  };

  new KarmaServer(karmaConfig, cb).start();
};
/**
 * @todo E2E Test
 */
const test = series(unitTesting);

module.exports = {
  test,
};