const path = require("path");

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products/polymers",
        permanent: true,
      },
      {
        source: "/order",
        destination: "/order/step-1",
        permanent: true,
      },
    ];
  },
  sassOptions: {
    includePaths: [[path.join(__dirname, "")]],
  },
};
