
const srcFolder = './src/';

module.exports = {
  global: {
    HTML: 'src/index.html',
    JS: {
      root: 'src/*.js',
      pages: 'src/pages/**/*.js',
      utils: 'src/utils/*.js',
      gulp: 'gulpfile/*.js',
      components: 'src/Components/*.js',
      header: 'src/Components/Header/*.js',
      component: 'src/Components/Component/*.js',
      hoc: 'src/HOC/*.js',
      redux: {
        session: 'src/redux/session/*js',
      },
    },
    MINIFIED_OUT_JS: 'build.min.js',
    MINIFIED_OUT_CSS: 'index.css',
    OUT: 'dist/build',
    DEST: './dist',
    BUILD_TEMPLATES: 'dist/build',
    DEST_SRC: 'dist/src',
    ENTRY_POINT: './src/index.js',
    RELEASE: './release',
    CONFIG_SRC: `${srcFolder}config`,
    NEXUS: './nexus',
    CSS: './src/css',
    SASS: {
      root: './src/index.scss',
      pages: './src/pages/index.scss',
      components: './src/Components/index.scss',
      header: './src/Components/Header/style.scss',
      component: './src/Components/Component/style.scss',
    },
  },
};
