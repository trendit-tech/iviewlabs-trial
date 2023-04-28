const path = require('path');

module.exports = {
    webpack(config) {
        config.resolve.alias['@'] = path.join(__dirname, 'src');
        return config;
      },
      // cssModules: {
      //   globalScope: ".global"
      // },
    env: {
        CONTENTFUL_ACCESS_TOKEN:process.env.CONTENTFUL_ACCESS_TOKEN,
        CONTENTFUL_SPACE:process.env.CONTENTFUL_SPACE
    },
  }