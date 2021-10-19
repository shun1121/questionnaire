// エントリポイント
import React from "react";
import ReactDom from "react-dom";
import TestElements from "./testElement";
import CheckboxWithLabel from "./CheckboxWithLabel";

// Helloコンポーネントがindex.htmlのid="app"のdiv要素に反映される。
ReactDom.render(
  <React.StrictMode>
    <TestElements />
    <CheckboxWithLabel name={"John"} age={33} labelOn="On" labelOff="Off" />
  </React.StrictMode>,
  document.getElementById("app")
);
