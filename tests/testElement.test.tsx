import React from "react";
import {
  fireEvent,
  render,
  cleanup,
  // getByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TestElements from "../src/testElement";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

// スナップショットテスト **************************
// it('matches to the snapshot', () => {
//   const { asFragment } = render(<TestElements />);

//   expect(asFragment()).toMatchSnapshot();
// })

//  https://jestjs.io/ja/docs/expect#tohavebeencalled
test('onClick', () => {
  // 実際の関数の代わりの役割を持つものとしてモック関数は存在する？
  const handleClick = jest.fn()
  const { getByText } = render(
    <button data-testid="button-up" onClick={handleClick}>
      Usoppu
    </button>
  )
  fireEvent.click(getByText('Usoppu'))
  expect(handleClick).toHaveBeenCalled()
  expect(handleClick).toHaveBeenCalledTimes(1)
})


// https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f
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