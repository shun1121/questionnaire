import React, { useState } from "react";

const Hello: React.VFC = () => {
  const [increment, setIncrement] = useState<number>(0);

  const greetingText: (date: Date) => string = (date) => {
    const hours = date.getHours() + 1;
    // const hours = 6;
    console.log(new Date().getHours());
    if (5 < hours && hours < 11) {
      console.log(hours);
      return "Goten Morgen!!";
    } else if (11 < hours && hours < 16) {
      console.log(hours);
      return "Gten Arbend!!";
    } else {
      console.log(hours);
      return "Gute Achat!!";
    }
  };
  const countUp = (): void => {
    setIncrement(increment + 1);
  };

  const countDown = (): void => {
    setIncrement(increment - 1);
  };
  return (
    <>
      <h2>Lets learn React</h2>
      <h1>{greetingText(new Date())}</h1>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      <p>{increment}</p>
    </>
  );
};

export default Hello;
