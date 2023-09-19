// Section1.js
import React from "react";
import Newsletter from "./NewsLetter";
import PlayerStats from "./PlayerStats";

const Section1 = () => {
  return (
    <div className="Section1">
      <PlayerStats/>
      <Newsletter />
    </div>
  );
};

export default Section1;