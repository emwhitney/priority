import React from "react";

function BreakInterval({ breakInterval, increaseBreak, decreaseBreak }) {
  function decreaseCounter() {
    if (breakInterval === 1) return;
    decreaseBreak();
  }

  function increaseCounter() {
    if(breakInterval === 60) return;
    increaseBreak();
  }

  return (
    <div>
      <div>
        <h4 className='length-header'>Break</h4>
      </div>
      <div className="interval-container">
        <button className='button-pomo' onClick={decreaseCounter}>▼</button>
        <p className="interval-choice">{breakInterval}</p>
        <button className='button-pomo' onClick={increaseCounter}>▲</button>
      </div>
    </div>
  );
}

export default BreakInterval;
