// エントリポイント
import React from "react";
import ReactDom from "react-dom";
import { sum } from "./Hello";
import { SayHello } from "./test3";
import TestElements from "./testElement";

// Helloコンポーネントがindex.htmlのid="app"のdiv要素に反映される。
ReactDom.render(
  <React.StrictMode>
    {/* <Hello /> */}
    <div>{sum}</div>
    <div>{SayHello}</div>
    <TestElements />
  </React.StrictMode>,
  document.getElementById("app")
);
