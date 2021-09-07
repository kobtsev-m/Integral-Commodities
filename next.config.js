const path = require('path');
const nextTranslate = require('next-translate');

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products/sulphur',
        permanent: true
      },
      {
        source: '/ru',
        destination: '/products/polymers',
        permanent: true
      },
      {
        source: '/order',
        destination: '/order/step-1',
        permanent: true
      }
    ];
  },
  sassOptions: {
    includePaths: [[path.join(__dirname, '')]]
  },
  ...nextTranslate()
};
