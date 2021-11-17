import "./Focus.css";
import Title from "./Title";
import Pomodoro from "./Pomodoro";

function Focus({ taskList }) {
  const primaryTask = taskList[0].task;
  const primaryTaskType = taskList[0].type;

  return (
    <div>
      <Title />
      <div className= 'flexbox-focus-container'>
        <div className="focus-task-container">
          <div id="task-header">You should work on:</div>
          <div id="primary-task">{primaryTask}</div>
          <div id="type-header">For: </div>
          <div id="primary-task-type">{primaryTaskType}</div>
        </div>
        <div className="focus-clock-container">
          <Pomodoro />
        </div>
      </div>
    </div>
  );
}

export default Focus;
