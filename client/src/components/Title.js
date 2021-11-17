import React from "react";
import { NavLink } from 'react-router-dom';
import "./Title.css";

function Title() {
  return (
    <NavLink className="title" activeClassName="nav-active" exact to="/">
      <b>Priority ✨</b>
    </NavLink>
  );
}

export default Title;
