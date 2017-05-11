module.exports = {
  plugins: [
    require('postcss-smart-import')(),
    require('postcss-css-variables')(),
    require('precss')(),
    require('postcss-clearfix')(),
    require('autoprefixer')()
  ]
};
