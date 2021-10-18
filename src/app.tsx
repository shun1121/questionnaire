// エントリポイント
import React from "react";
import ReactDom from "react-dom";
import { sum } from "./Hello";
import { SayHello } from "./test3";

// Helloコンポーネントがindex.htmlのid="app"のdiv要素に反映される。
ReactDom.render(
  <React.StrictMode>
    {/* <Hello /> */}
    <div>{sum}</div>
    <div>{SayHello}</div>
  </React.StrictMode>,
  document.getElementById("app")
);
