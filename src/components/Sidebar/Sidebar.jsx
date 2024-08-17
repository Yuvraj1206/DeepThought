import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState("nodisplay");
  const toggleSidebar = () => {
    if (sidebar === "nodisplay") setSidebar("");
    else setSidebar("nodisplay");
  };
  return (
    <div>
      <div className={`sidebar ${sidebar}`}>
        <img src="left-arrow.png" alt="" onClick={toggleSidebar} />
        <h4>Journey Board</h4>
        <ul>
          <li className="subhead">Explore the world of management</li>
          <li> Technical Project Management</li>
          <li>Threadbuild</li>
          <li>Structure your pointers</li>
          <li>4SA Method</li>
        </ul>
      </div>

      <div className="close-sidebar ">
        <div className="close-sidebar-top">
          <img src="right-arrow.png" alt="arrow" onClick={toggleSidebar} />
        </div>
        <img src="one.png" alt="one" className="oneimg" />
      </div>
    </div>
  );
};

export default Sidebar;
