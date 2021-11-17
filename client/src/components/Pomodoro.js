import { useState } from "react";
import "./Pomodoro.css";
import BreakInterval from "./BreakInterval";
import SessionInterval from "./SessionInterval";
import Clock from "./Clock";

function Pomodoro() {
  const [breakLength, setBreakLength] = useState(5);
  const [focusLength, setFocusLength] = useState(25);
  const [timerMinute, setTimerMinute] = useState(focusLength);
  const [totalSessions, setTotalSessions] = useState(0);

  var onIncreaseBreakLength = function () {
    setBreakLength((prevState) => prevState + 1)
  };

  var onDecreaseBreakLength = function () {
    setBreakLength((prevState) => (prevState = prevState - 1));
  };

  var onIncreaseSessionLength = function () {
    setFocusLength((prevState) => prevState + 1);
    setTimerMinute(focusLength + 1);
  };

  var onDecreaseSessionLength = function () {
    setFocusLength((prevState) => prevState - 1);
    setTimerMinute(focusLength - 1);
  };

  var onUpdateTimerMinute = function () {
    setTimerMinute((prevState) => prevState - 1);
  };

  var onSessionChange = function (isSession) {
    if (isSession) {
      setTimerMinute(focusLength);
    } else {
      setTimerMinute(breakLength);
    }
  };

  var onTimerReset = function() {
    setTimerMinute(focusLength)
  }

  return (
    <div>
      <div id="pomo-header">Pomodoro:</div>
      <div className="pomo-container">
        <div className="interval-parent-container">
          <SessionInterval
            id="session-interval"
            sessionInterval={focusLength}
            increaseSession={onIncreaseSessionLength}
            decreaseSession={onDecreaseSessionLength}
          />
          <BreakInterval
            id="break-interval"
            increaseBreak={onIncreaseBreakLength}
            decreaseBreak={onDecreaseBreakLength}
            breakInterval={breakLength}
          />
        </div>

        <Clock
          id="clock"
          toggleInterval={onSessionChange}
          updateTimerMinute={onUpdateTimerMinute}
          timerMinute={timerMinute}
          breakLength={breakLength}
          resetTimer = {onTimerReset}
        />
      </div>
    </div>
  );
}

export default Pomodoro;
