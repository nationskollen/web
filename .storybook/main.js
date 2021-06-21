const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    '../stories/start.stories.mdx',
    '../stories/**/*.stories.@([tj]sx|mdx)'
  ],
  addons: [
   "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@common": toPath("components/common"),
        }
      }
    };
  }
};
