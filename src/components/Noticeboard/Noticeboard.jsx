import React from "react";
import "./Noticeboard.css";

const Noticeboard = () => {
  return (
    <div className="noticeboard">
      <ul className="notice">
        <li className="noticeclose">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </li>
        <li>N</li>
        <li>O</li>
        <li>T</li>
        <li>I</li>
        <li>C</li>
        <li>E</li>
      </ul>
      <ul className="board">
        <li>B</li>
        <li>O</li>
        <li>A</li>
        <li>R</li>
        <li>D</li>
      </ul>
    </div>
  );
};

export default Noticeboard;
