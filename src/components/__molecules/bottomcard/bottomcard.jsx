import React from "react";
import "../bottomcard/bottomcard.css";
import lines from "../../../assets/images/lines.svg";
function BottomCard({ ccv }) {
  return (
    <>
      <div className="bottomcard">
        <div className="blackline"></div>
        <div className="greyline">
          <p className="code">{ccv}</p>
        </div>
        <img src={lines} className="lines" alt="" />
      </div>
    </>
  );
}
export default BottomCard;
