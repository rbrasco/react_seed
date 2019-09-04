 /**
 * Git Tasks
 * @module tasks/release-git
 */
const { src, dest, series } = require('gulp');
const bump = require('gulp-bump');
const git = require('gulp-git');
const { getCommandArguments } = require('./helpers');
const { version, name } = require('../package.json');
const deployer = require('nexus-deployer');
const zip = require('gulp-zip');
const paths = require('./paths.js');
const argv = getCommandArguments();

const push = (cb) => {

  git.revParse({ args: '--abbrev-ref HEAD' }, function (branch) {

    git.push('origin', branch, { args: '--follow-tags' }, cb);

  });

};

const gitCommit = () => {

  return src('./package.json')
    .pipe(git.add())
    .pipe(git.commit(`New ${argv.type} release done. Version: ${version}`));

};

const gitPush = cb => push(cb);

const gitTag = (cb) => {
  git.tag(`${name}-${version}`, `New Release Version: ${version}`, cb);
}

const bumpVersion = (cb) => {

  if (!argv.type) {

    cb();
    throw new Error('Specify a release type within major, patch or minor');

  }

  return src('./package.json')
    .pipe(bump({
      type: argv.type,
    }))
    .pipe(dest('./'));

};

const nexusDeploy = (callback) => {

  if(!process.env.NEXUS_CREDENTIALS) {
    return callback();
  }
  const nexusCredentials = process.env.NEXUS_CREDENTIALS.split(':');
  const usernameNexus = nexusCredentials[0];
  const passwordNexus = nexusCredentials[1];

  const release = {
    groupId: 'com.scytl.suuid',
    artifactId: name,
    version,
    packaging: 'zip',
    auth: {
      username: usernameNexus,
      password: passwordNexus,
    },
    url: 'https://nexus.scytl.net/content/repositories/releases',
    artifact: `${paths.global.NEXUS}/${name}.zip`,
    pomDir: 'release/', // You need to pass here an existing folder, used by Nexus to create on the fly maven files (pom)
    noproxy: 'localhost',
    cwd: '',
  };

  deployer.deploy(release, callback);

};

const makeNexusFolder = () => {

  return src(`${paths.global.RELEASE}/**/*`)
  .pipe(zip(`${name}.zip`))
  .pipe(dest(paths.global.NEXUS));
};

const release = series(gitCommit, gitTag, gitPush, makeNexusFolder, nexusDeploy);

module.exports = {
  release,
  bumpVersion,
}

