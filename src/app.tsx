// エントリポイント
import React from "react";
import ReactDom from "react-dom";
import { sum } from "./Hello";

// Helloコンポーネントがindex.htmlのid="app"のdiv要素に反映される。
ReactDom.render(
  <React.StrictMode>
    {/* <Hello /> */}
    <div>{sum}</div>
  </React.StrictMode>,
  document.getElementById("app")
);
