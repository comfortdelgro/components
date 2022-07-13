module.exports = {
  "stories": ["../src/**/*.stories.(js|mdx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-contexts",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}