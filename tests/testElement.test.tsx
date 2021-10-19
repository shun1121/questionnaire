import React from "react";
import {
  render,
  cleanup,
  // getByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestElements from "../src/testElement";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

// スナップショットテスト
it('matches to the snapshot', () => {
  const { asFragment } = render(<TestElements />);

  expect(asFragment()).toMatchSnapshot();
})

it("Counter should equal to 0", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("counter")).toHaveTextContent("0");
});

it("Button should be enabled", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
});

it("Button should be disabled", () => {
  const { getByTestId } = render(<TestElements />);
  expect(getByTestId("button-down")).toBeDisabled();
});