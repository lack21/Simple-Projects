import { useState } from "react";
function Alert() {
  const [showWarning, setShowWarning] = useState(false);

  function ToggleWarning() {
    setShowWarning((showWarning) => !showWarning);
  }

  return (
    <section className="alert-section">
      <div className={`warning-alert ${showWarning ? "show" : ""}`}>
        <h3 className="text">This is a warning!</h3>
        <i className="fa fa-close" onClick={ToggleWarning}></i>
      </div>
      <button className="btn" onClick={ToggleWarning}>
        Click Me!
      </button>
    </section>
  );
}

export default Alert;
