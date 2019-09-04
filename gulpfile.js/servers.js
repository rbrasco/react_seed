const { gulpNotify } = require('./helpers');
const browserSync = require('browser-sync');
const { series, src, dest } = require('gulp');
const rename = require('gulp-rename');
const proxy = require('http-proxy-middleware');
const replace = require('gulp-replace');
const prompt = require('gulp-prompt');
const paths = require('./paths');

let oUser = false;
const devFile = 'dev-config.js';
const devFileSample = 'dev-config.sample.js';

const checkConfig = (cb) => {

  try {

    require(`./${devFile}`);

  } catch (e) {

    return src('./')
      .pipe(prompt.prompt({
        type: 'input',
        name: 'oUser',
        message: 'Please, insert your OpenStack user:',
      }, (res) => {

        oUser = res.oUser;

      }));

  }

  cb();

};

const makeConfigFile = (cb) => {

  if (!oUser) {

    return cb();

  }

  return src([`./gulpfile.js/${devFileSample}`])
    .pipe(replace('[USER]', oUser))
    .pipe(rename(devFile))
    .pipe(dest('./gulpfile.js'))
    .on('end', () => {

      gulpNotify('Config file created!', `"${devFile}" has been created with flavor "${oUser}"`);

    });

};

// 'env' is a local file in order to have the develop configuration in the developer's machine.
// In the repository, only will be the sample file. Here catch the error if it isn't found
// because the gulpfile requires this file anyway and it crash the build, althought doesn't
// use it for other tasks. Requiring env.sample ensures that any gulp task won't crash if
// the folder has all the repository files.

const getServersConfig = () => {

  const env = require('./dev-config').env;

  return {
    mock: {
      baseDir       : paths.global.dist,
      watch         : true,
      port          : 3010,
      proxies       : env.servers.mock.proxies,
    },
    dev: {
      baseDir       : paths.global.dist,
      watch         : true,
      port          : 3020,
      openInBrowser : true,
      proxies       : env.servers.dev.proxies,
    },
  };

};


// Create middleware
function getMiddlewaresFromProxies (proxies) {

  if (!proxies || !proxies.map) {

    return [];

  }

  return proxies.map(p => proxy(
    p.api,
    Object.assign({
      changeOrigin: true, // needed for virtual hosted sites
      logLevel     : 'debug',
    }, p)
  ));

}

function Startserver (done) {

  const servers = getServersConfig();

  Object.keys(servers).forEach(serverName => {

    const config = servers[serverName];

    // Proxies config
    const middlewares = getMiddlewaresFromProxies(config.proxies);
    // BrowserSync config
    const bsConfig = Object.assign(
      {},
      {
        server: {
          baseDir: paths.global.DEST,
          middleware: middlewares,
        },
        open: config.openInBrowser || false,
        ui: {
          port: config.port + 1,
        },
      },
      config
    );

    browserSync.create(serverName);
    browserSync.get(serverName).init(bsConfig);

  });
  done();
  () => gulpNotify('Conected');

}

module.exports = {
  serve: series(
    checkConfig,
    makeConfigFile,
    Startserver,
  ),
};
