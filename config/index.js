import path from "path";

const config = {
  projectName: "taroConvert",
  date: "2020-6-1",
  designWidth: 750,
  deviceRatio: {
    "640": 2.34 / 2,
    "750": 1,
    "828": 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: `dist/${process.env.TARO_ENV}`,
  babel: {
    sourceMap: true,
    presets: [
      [
        "env",
        {
          modules: false,
        },
      ],
    ],
    plugins: [
      "transform-decorators-legacy",
      "transform-class-properties",
      "transform-object-rest-spread",
      [
        "transform-runtime",
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: "babel-runtime",
        },
      ],
    ],
  },
  copy: {
    patterns: [
      {
        from: "sitemap.json",
        to: "dist/sitemap.json",
      }, // 指定需要 copy 的目录
    ],
    options: {},
  },
  plugins: [],
  defineConstants: {},
  alias: {
    "@/components": path.resolve(__dirname, "..", "src/components"),
    "@/pages": path.resolve(__dirname, "..", "src/pages"),
    "@/utils": path.resolve(__dirname, "..", "src/utils"),
    "@/service": path.resolve(__dirname, "..", "src/service"),
    "@/global": path.resolve(__dirname, "..", "src/globalData"),
    "@/project": path.resolve(__dirname, "..", "project.config.json"),
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 10240, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ["last 3 versions", "Android >= 4.1", "ios >= 8"],
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
