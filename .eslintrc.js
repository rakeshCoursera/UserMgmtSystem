module.exports = {
  "extends": "airbnb-base",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "browser": true,
  },
  "rules": {
    "linebreak-style": [0],
    "react/jsx-uses-vars": [2],
    "no-underscore-dangle": [0],
    "prefer-destructuring": [0],
    "no-param-reassign": [0]
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
};