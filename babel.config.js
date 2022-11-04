module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@ui": "./src/ui",
            "@hooks": "./src/hooks",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
