import { useState } from "react";

function Background() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const arr = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "black",
    "orange",
    "pink",
  ];

  function ChangeBackground(e: any) {
    setBackgroundColor(
      (backgroundColor) => (backgroundColor = e.target.classList[1])
    );
  }

  return (
    <section className={`background-section ${backgroundColor}`}>
      {arr.map((item, index) => (
        <div
          key={index}
          className={`box ${item}`}
          onClick={(e) => ChangeBackground(e)}
        ></div>
      ))}
    </section>
  );
}

export default Background;
