import React, { useState } from "react";
import "./Home.css";
import Title_container from "../Title_container/Title_container";
import Data from "./data.json";
import Sidebar from "../Sidebar/Sidebar";
import Noticeboard from "../Noticeboard/Noticeboard";
import AssetCards from "../AssetCards/AssetCards";

const Home = () => {
  const [jsonData, setJsondata] = useState(Data.tasks[0]);

  return (
    <div className="home">
      <h2>Technical Project Management</h2>

      <Title_container
        taskTitle={jsonData.task_title}
        taskDescription={jsonData.task_description}
      />
      <Sidebar />
      <Noticeboard />
      <AssetCards card={jsonData.assets} />
    </div>
  );
};

export default Home;
