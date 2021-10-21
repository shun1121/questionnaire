import React, { useState } from "react";

// ↓これ使って分割代入の型定義できやんの？
// interface Props {
//   name: string;
//   age: number;
// }

const CheckboxWithLabel: React.FC<{
  name: string;
  age: number;
  labelOn: string;
  labelOff: string;
}> = ({ name, age, labelOn, labelOff }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [click, setClick] = useState(false);
  const [text, setText] = useState("");

  const onChange = () => {
    setIsChecked(!isChecked);
  };

  const onClick = () => {
    setClick(!click);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <p>
        私は{name}です。{age}歳です
      </p>
      <button onClick={onClick}>button</button>
      <div>{click ? "apple" : "orange"}</div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        {isChecked ? labelOn : labelOff}
      </label>
      <div>
        <input
          type="text"
          onChange={handleOnChange}
          value={text}
          placeholder="input"
        />
        <p>{text}</p>
      </div>
    </>
  );
};

export default CheckboxWithLabel;
