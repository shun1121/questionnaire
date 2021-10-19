import React from "react";

const TestElements: React.VFC = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}>
        Usoppu
      </button>
      <button
        disabled
        data-testid="button-down"
        onClick={() => setCounter(counter - 1)}
      >
        Down
      </button>
    </>
  );
};

export default TestElements;
