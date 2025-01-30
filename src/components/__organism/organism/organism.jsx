import React, { useState } from "react";
import "../organism/organism.css";
import UpperCard from "../../__molecules/uppercard/uppercard";
import LeftDiv from "../../__molecules/leftdiv/leftdiv";
import BottomCard from "../../__molecules/bottomcard/bottomcard";
import Registration from "../../__molecules/registration/registration";
function Organism() {
  return (
    <>
      <div className="organism">
        <LeftDiv />
        <UpperCard />
        <BottomCard />
        <Registration />
      </div>
    </>
  );
}
export default Organism;
