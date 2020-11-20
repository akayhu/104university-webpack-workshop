const path = require("path");
const htmlWebpackplugin = require("html-webpack-plugin"); // 輸出 html 內容
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除打包沒用的程式
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css 取出套件
const VueLoaderPlugin = require("vue-loader/lib/plugin"); // vue

const config = {
  // mode: "development",
  // entry: "./src/index.js",
  entry: {
    main: "./src/index.js",
    footer: "./src/footer.js",
    // component: "./src/libs/component.js"
  },
  output: {
    // filename: "main.js",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    library: "myComponent",
    libraryTarget: "var" // "window" "amd" "umd"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"] // MiniCssExtractPlugin.loader, "style-loader",
      },
      {
        test: /\.(png|jpg|gif|svg)/,
        use: ["file-loader"]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 7890,
    hot: true
  },
  plugins: [
    new htmlWebpackplugin({
      title: "MyFirstApp",
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
  ],
  // devtool: "inline-source-map",
  externals: {
    // jquery: 'jQuery'
  },
  optimization: {
    // runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};

module.exports = (env, argv) => {
  console.log(env, argv);
  if (argv.mode === "production") {
    config.devtool = "inline-source-map";
  } else if (argv.mode === "development") {
    // 做什麼事
  }

  // dev 環境，package.json 要丟值近來
  // if (env.dev) {
  //   // 做什麼事
  // }

  // dev 環境，package.json 要丟值近來
  // if (env.NODE_ENV === "local") {
  //   // 做什麼事
  // }

  return config;
};