module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      }
    ],
    exclude: /node_modules/,

  })

  config.module.rules.push({
    test: /\.vue$/,
    loaders: ['storybook-addon-vue-info/loader',],
  })

  config.module.rules.push({
    test: /\.stories\.ts$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config;
};
