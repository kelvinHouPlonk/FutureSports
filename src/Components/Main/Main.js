// Main.js
import React from "react";
import News from "./News";
import Sponsor from "./Sponsor";

const Main = () => {
  return (
    <div className="MainSection">
      <Sponsor/>
      <News />
    </div>
  );
};

export default Main;