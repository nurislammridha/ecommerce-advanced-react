const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const webpack = require('webpack');

module.exports = withImages();

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    );
    return config;
  },
};

module.exports = withSass();
