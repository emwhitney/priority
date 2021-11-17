import Home from './components/Home';
import Quiz from './components/Quiz';
import axios from 'axios';
import Focus from './components/Focus';
import TaskList from './components/TaskList';
import { Route } from 'react-router-dom';
import { useEffect, useState } from "react";
//import global styles, font property on the body element

function App() {

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTaskList();
  }, []);

  var getTaskList = function() {
    console.log('start loading tasks')
    axios
      .get("http://localhost:4000/tasks")
      .then((response) => response.data)
      .then((response) => setTaskList(response));
  }
  
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/addtask" render={() => <Quiz getTaskList={getTaskList}/>} />
      <Route exact path="/focus" render={() => <Focus taskList={taskList}/>} />
      <Route exact path="/tasklist" render={() => <TaskList getTaskList={getTaskList} taskList={taskList}/>} />
    </div>
  );
}

export default App;
