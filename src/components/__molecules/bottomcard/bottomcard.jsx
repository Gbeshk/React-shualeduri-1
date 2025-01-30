import React from "react";
import "../bottomcard/bottomcard.css";
import lines from "../../../assets/images/lines.svg";
function BottomCard() {
  return (
    <>
      <div className="bottomcard">
        <div className="blackline"></div>
        <div className="greyline">
          <p className="code">000</p>
        </div>
        <img src={lines} className="lines" alt="" />
      </div>
    </>
  );
}
export default BottomCard;
