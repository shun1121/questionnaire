// エントリポイント
import React from "react";
import ReactDom from "react-dom";
import Hello from "./Hello";

// Helloコンポーネントがindex.htmlのid="app"のdiv要素に反映される。
ReactDom.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById("app")
);
