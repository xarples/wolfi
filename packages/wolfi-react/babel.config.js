module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry'
      }
    ]
  ],
  plugins: ['styled-jsx/babel']
}
