import React from 'react';
import {cleanup, fireEvent, render, screen } from '@testing-library/react';
import CheckboxWithLabel from '../src/CheckboxWithLabel';
import userEvent from '@testing-library/user-event';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const {queryByLabelText, getByLabelText} = render(
    <CheckboxWithLabel name={"John"} age={33} labelOn="On" labelOff="Off" />,
  );

  // 要素が存在しないことをアサーション(条件を満たす表明)する場合にはqueryByを使い、それ以外の場合は標準でgetByを使います
  expect(queryByLabelText(/off/i)).toBeTruthy();

  // iオプション 文字列を区別しない
  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();

  // テキストボックスの入力テスト
  expect(screen.getByRole("textbox")).toBeTruthy();
  // https://www.codegrepper.com/code-examples/javascript/react+testing+library+Property+%27value%27+does+not+exist+on+type+%27HTMLElement%27.ts%282339%29
  const inputValue = screen.getByPlaceholderText("input") as HTMLInputElement;
  userEvent.type(inputValue, "test");
  expect(inputValue.value).toBe("test");
});

// 文字列マッチング
test('matching text', () => {
  const { container } = render(<CheckboxWithLabel name={"John"} age={33} labelOn="On" labelOff="Off" />)
  // expect(container.innerHTML).toMatch("私はJohnです。33歳です")
  expect(container).toHaveTextContent('私はJohnです。33歳です')
})
