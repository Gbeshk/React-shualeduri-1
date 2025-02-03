import React from "react";
import "../leftdiv/leftdiv.css";
import BottomCard from "../bottomcard/bottomcard";
import UpperCard from "../uppercard/uppercard";
function LeftDiv({ ccv, longnumber, name, month, year }) {
  return (
    <>
      <div className="leftdiv">
        <BottomCard ccv={ccv} />
        <UpperCard
          longnumber={longnumber}
          name={name}
          month={month}
          year={year}
        />
      </div>
    </>
  );
}
export default LeftDiv;
