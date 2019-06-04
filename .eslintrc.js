module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module"
  },
  "env": {
    "node": true,
    "es6": true
  },
  "extends": [
    "plugin:vue/essential",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
