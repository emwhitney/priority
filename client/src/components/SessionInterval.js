import React from "react";

function SessionInterval({ sessionInterval, increaseSession, decreaseSession }) {


  function decreaseCounter() {
    if(sessionInterval === 1) return;
    decreaseSession();
  }

  function increaseCounter() {
    if(sessionInterval === 60) return
    increaseSession();
  }

  return (
    <div>
      <div>
        <h4 className="length-header">Focus</h4>
      </div>
      <div className="interval-container">
        <button className='button-pomo' onClick={decreaseCounter}>▼</button>
        <p className="interval-choice">{sessionInterval}</p>
        <button className='button-pomo' onClick={increaseCounter}>▲</button>
      </div>
    </div>
  );
}

export default SessionInterval;
