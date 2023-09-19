// Section1.js

import React from "react";
import NewsLetter from "./NewsLetter";
import PlayerStats from "./PlayerStats";

const Section1 = () => {
  return (
    <div className="Section1">
      <PlayerStats/>
      <NewsLetter/>
    </div>
  );
};

export default Section1;