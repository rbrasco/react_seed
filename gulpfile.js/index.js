const {series} = require('gulp');

//Tasks

const { build, production } = require('./build');
const { serve } = require('./servers');
const { publish } = require('./publish');
const { release } = require('./release');
const { watchIt, RunEslint } = require('./dev.js');
const { test } = require('./tests');

// Expose
const base = series(build, RunEslint, serve, watchIt);

module.exports = {
  production,
  RunEslint,
  publish,
  release,
  test,
  default: base,
} 