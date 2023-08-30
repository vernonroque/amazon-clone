module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    quotes: ["error", "double"],
  },
  // parser: "@babel-eslint"
  // parser: ["@babel/eslint-parser"],
  // parser: "@babel/eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false, // <== ADD THIS
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
};
