module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  env: {
    node: true,
    browser: true,
    jest: true
  }
};
