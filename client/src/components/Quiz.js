import React from "react";
import { useState, useEffect } from "react";
import RankQuestion from "./RankQuestion";
import Title from "./Title";
import axios from "axios";
import "./Quiz.css";

function Quiz( {getTaskList} ) {
  const [priority, setPriority] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("");

  useEffect(() => {
    console.log(priority,
    taskName,
    taskType)
  })

  function changePriority(event) {
    const oldPriority = priority;
    //if there's been a change in priority
    if((Number(oldPriority) !== Number(oldPriority) + Number(event.target.value))) {
      setPriority(Number(oldPriority) + Number(event.target.value));
    }
  }

  function changeName(event) {
    setTaskName(event.target.value);
  }

  function changeType(event) {
    setTaskType(event.target.value);
  }

  function submitTask(event) {
    event.preventDefault();
    axios.post("http://localhost:4000/addTask", {
      task: taskName,
      priority: priority,
      type: taskType,
    }).then(getTaskList);
    setPriority(0);
    setTaskType(0);
    setTaskName("");
  }

  return (
    <div>
      <div>
        <Title />
      </div>
      <form onSubmit = {submitTask}>
        <div className="questions">
          <li>
            <form className="question" onChange={changeName}>
              <label>What is the task name?</label>
              <input type="text" name="taskName" />
            </form>
          </li>

          <li>
            <form className="question" onChange={changeType}>
              Is this task for&nbsp;
              <input type="radio" name="ttype" value="Work" id="opt1"></input>
              <label for="opt1" className="label">
                <span>work</span>
              </label>
              ,&nbsp;
              <input
                type="radio"
                name="ttype"
                value="Life maintenance"
                id="opt2"
              ></input>
              <label for="opt2" className="label">
                <span>life maintenance</span>
              </label>
              ,&nbsp;or&nbsp;
              <input type="radio" name="ttype" value="Joy" id="opt3"></input>
              <label for="opt3" className="label">
                <span>joy</span>
              </label>
              ?
            </form>
          </li>

          <li>
            <form className="question" onChange={changePriority}>
              How urgent is this task?
              <RankQuestion
                idarray={["urg1", "urg2", "urg3", "urg4", "urg5"]}
              />
            </form>
          </li>

          <li>
            <form className="question" onChange={changePriority}>
              Do you have to complete this task first to start another task?
              <RankQuestion
                idarray={["comp1", "comp2", "comp3", "comp4", "comp5"]}
              />
            </form>
          </li>

          <li>
            <form className="question" onChange={changePriority}>
              To what extent are people depending on you to complete this?
              <RankQuestion
                idarray={["dep1", "dep2", "dep3", "dep4", "dep5"]}
              />
            </form>
          </li>

          <li>
            <form className="question" onChange={changePriority}>
              Will this keep you up at night or distract you from other tasks?
              <RankQuestion
                idarray={["dis1", "dis2", "dis3", "dis4", "dis5"]}
              />
            </form>
          </li>

          <li>
            <form className="question" onChange={changePriority}>
              Are you excited to do this? Do you feel motivated?
              <RankQuestion
                idarray={["mot1", "mot2", "mot3", "mot4", "mot5"]}
              />
            </form>
          </li>
        </div>
        <button type="submit" className='submit-button' exact to="/tasklist"> Submit 👍</button>
      </form>
    </div>
  );
}

export default Quiz;
