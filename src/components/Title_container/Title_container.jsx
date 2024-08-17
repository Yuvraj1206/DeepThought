import React from "react";
import "./Title_container.css";

const Title_container = (props) => {
  return (
    <div className="title_container">
      <h3>{props.taskTitle}</h3>
      <p>{props.taskDescription}</p>
    </div>
  );
};

export default Title_container;
