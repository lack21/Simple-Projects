import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function PlusCount() {
    setCounter((counter) => (counter += 1));
  }

  function ResetCount() {
    setCounter(0);
  }

  function MinusCount() {
    setCounter((counter) => (counter -= 1));
  }

  return (
    <section className="count-section">
      <h3 className="text">{counter}</h3>
      <div className="btns">
        <button className="plus-btn btn" onClick={PlusCount}>
          +
        </button>
        <button className="reset-btn btn" onClick={ResetCount}>
          Reset
        </button>
        <button className="minus-btn btn" onClick={MinusCount}>
          -
        </button>
      </div>
    </section>
  );
}

export default Counter;
