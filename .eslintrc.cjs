module.exports = {
  extends: ["react-app", "plugin:sonarjs/recommended"],
  rules: {
    "unicorn/no-null": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
    "sonarjs/cognitive-complexity": ["error", 20],
    "unicorn/numeric-separators-style": "off",
  },
};
