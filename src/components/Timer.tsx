import { useRef, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const timer: any = useRef(null);

  function StartTimer() {
    timer.current = setInterval(() => setTime((time) => (time += 1)), 500);
  }

  function ResetTimer() {
    clearInterval(timer.current);
    setTime(0);
  }

  function PauseTimer() {
    clearInterval(timer.current);
  }

  return (
    <section className="timer-section">
      <h3 className="text">{time}</h3>
      <div className="btns">
        <button className="start-btn btn" onClick={StartTimer}>
          Start
        </button>
        <button className="reset-btn btn" onClick={ResetTimer}>
          Reset
        </button>
        <button className="pause-btn btn" onClick={PauseTimer}>
          Pause
        </button>
      </div>
    </section>
  );
}

export default Timer;
