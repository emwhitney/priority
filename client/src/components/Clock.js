import { useState, useEffect } from "react";
import BreakInterval from "./BreakInterval";

function Clock({ timerMinute, updateTimerMinute, resetTimer, toggleInterval }) {
  const [isSession, setIsSession] = useState(true);
  const [timerSecond, setTimerSecond] = useState(0);
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      let interval = setInterval(() => {
        if (timerSecond === 0) {
          if (timerMinute === 0) {
            if (isSession) {
              setIsSession(false);
              toggleInterval(isSession);
              setPlaying(false);
            } else {
              setIsSession(true);
              toggleInterval(isSession);
              setPlaying(false);
            }
          }
          updateTimerMinute();
          setTimerSecond(59);
        } else {
          setTimerSecond((prev) => prev - 1);
        }
      }, 1000);
      //once isPlaying stops, cancels timed repeating action
      return () => clearInterval(interval);
    }
  });

  function play() {
    setPlaying(true);
  }

  function pause() {
    setPlaying(false);
  }

  function refresh() {
    setPlaying(false);
    setTimerSecond(0);
    resetTimer();
  }

  return (
    <div>
      <div className="clock-container">
        <h4 className="session-header">{isSession ? "Session" : "Break"}</h4>
        <span className="timer">{timerMinute}</span>
        <span className="timer">:</span>
        <span className="timer">
          {timerSecond === 0
            ? "00"
            : timerSecond < 10
            ? "0" + timerSecond
            : timerSecond}
        </span>
      </div>
      <div className="timer-actions">
        <button className="button-pomo" onClick={play}>
          Play
        </button>
        <button className="button-pomo" onClick={pause}>
          Pause
        </button>
        <button className="button-pomo" onClick={refresh}>
          Refresh
        </button>
      </div>
    </div>
  );
}

export default Clock;
