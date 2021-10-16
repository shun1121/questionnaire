const path = require("path")
// webpackからhtmlを生成するのを簡単にする為のプラグイン
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
  mode: "development",
  // path.resolveで絶対パスに変換している。相対だといちいちフォルダを登ったりめんどくさい
  entry: path.resolve(__dirname, "src/app.tsx"),
  output: {
    // User/fukunishi.s/documents/quesionnaire/distになるはず
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js" , ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        // 対象となる拡張子の指定 クオーテーションはいらない
        test: [/\.ts$/, /\.tsx$/],
        // 処理内容の指定(どのローダーをこのファイルにあてるのか)
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new ESLintPlugin({
      // チェックするファイルの拡張子を指定。
      extensions: ["ts", "tsx", "js"],
    })
  ],
  devServer: {
    // webpack-dev-serverを立ち上げた時のドキュメントルートを設定
    // ここではdistディレクトリにアクセスするよう設定してます
    static: {
      directory: path.join(__dirname, "dist"),
    },
  }
}










