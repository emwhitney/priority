import React from "react";
import "./Home.css";
import Title from './Title';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
    
      <div className="title-container">
        <div className="app-title">
          <Title/>
        </div>

        <div className="subtitle">
          rank your tasks based on urgency and importance
        </div>
      </div>

      <div className="home-buttons">
        <NavLink className="home-button" activeClassName="nav-active" exact to="/focus">FOCUS ⏳</NavLink>
        <NavLink className="home-button" activeClassName="nav-active" exact to="/addtask">ADD TASK ✍️</NavLink>
        <NavLink className="home-button" activeClassName="nav-active" exact to="/tasklist">TASK LIST 🗃️</NavLink>
      </div>
    </div>
  );
}

export default Home;
