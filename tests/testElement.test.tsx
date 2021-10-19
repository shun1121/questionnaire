import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestElements from '/Users/fukunishi.s/Documents/questionnaire/src/testElement';

afterEach(cleanup);

it("Button should be enabled", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
});

it("Button should be disabled", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("button-down")).toBeDisabled();
});