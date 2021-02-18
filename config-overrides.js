const { addWebpackAlias, override } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@components': path.resolve(__dirname, './src/components'),
    '@contexts': path.resolve(__dirname, './src/contexts'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@services': path.resolve(__dirname, './src/services'),
    '@ui': path.resolve(__dirname, './src/components/ui'),
  })
);
