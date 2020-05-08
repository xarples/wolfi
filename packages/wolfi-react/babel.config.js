module.exports = {
  presets: [
    "@babel/preset-env",
    ["@babel/preset-typescript", { allExtensions: true }],
  ],
  plugins: ["styled-jsx/babel"],
}
