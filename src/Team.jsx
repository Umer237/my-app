import React from "react";
import "./Team.css";
import Girl from "./images/Girl.jpeg";

const Team = () => {
  return (
    <>
    <div className="Team-Flex">
    <div className="Background-Team">
    <div className="Team">
      <img src={Girl} alt="" />
      <h1>Zulabia Idrees</h1>
      <p>
       Pakistan
      </p>
      </div>
      </div>
      </div>
    </>
  );
};

export default Team;
