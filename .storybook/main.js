const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);


module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-viewport"
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@components": toPath("components"),
          "@layouts": toPath("components/layouts"),
          "@common": toPath("components/common"),
          "@svg": toPath("components/svg"),
          "@forms": toPath("components/forms"),
          "@notifications": toPath("components/notifications/index"),
          "@dialogs": toPath("components/dialogs"),
          "@pages": toPath("components/pages"),
          "@contexts": toPath("contexts"),
          "@styles": toPath("styles"),
          "@i18n": toPath("i18n"),
          "@utils": toPath("utils/index"),
          "@constants": toPath("constants"),
          "@typings": toPath("typings")
        }
      }
    };
  }
}
