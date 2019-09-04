/*
 * Copyright 2019 Scytl Secure Electronic Voting SA
 *
 * All rights reserved
 *
 * See our extended copyright notice in file 'Copyright.txt' which is part of this source code package
 */
/**
 * SAMPLE ENVIRONMENT
 * Copy this file and rename it to dev-config.js
 *
 * Here, you can put all your local information.
 *
 * The proxies array must to contain objects that will be used by http-proxy-middleware
 * @see: https://github.com/chimurai/http-proxy-middleware
 */
const env = {
  servers: {
    mock: {
      proxies: [
        // ALERT: Don't remove it. Leave emtpy if you don't need it
      ],
    },
    dev: {

      // Proxies
      // -------
      proxies: [
        {
          api: '/portal-webapp',
          target: 'https://portal-[USER]-devglab.iaas.scytlprojects.net',
        },
        {
          api: '/portal-demo-webapp',
          target: 'https://portal-[USER]-devglab.iaas.scytlprojects.net',
        },
        {
          api: '/simplesaml',
          target: 'https://portal-[USER]-devglab.iaas.scytlprojects.net',
        },
        {
          api: '/kr-webapp',
          target: 'https://portal-[USER]-devglab.iaas.scytlprojects.net',
        },
        {
          api: '/id',
          target: 'https://portal-[USER]-devglab.iaas.scytlprojects.net',
        },
        {
          api: '/rest-portal',
          target: 'https://portal-[USER]-devglab.iaas.scytlprojects.net',
        },
      ],
    },
  },
};

module.exports = {
  env,
};
