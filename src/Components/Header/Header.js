//Header,js
import React from "react";
import MatchHistory from "./MatchHistory";
import Welcome from "./Welcome";

const Main = () => {
  return (
    <div className="HeaderSection">
      <Welcome/>
      <MatchHistory />
    </div>
  );
};

export default Main;