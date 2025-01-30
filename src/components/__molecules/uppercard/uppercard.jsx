import React from "react";
import UpperCardInfo from "../../__atoms/uppercardinfo/uppercardinfo";
import "../uppercard/uppercard.css";
import UpperCardLastLine from "../../__atoms/uppercardlastline/uppercardlastline";
function UpperCard() {
  return (
    <>
      <div className="uppercard">
        <UpperCardInfo />
        <UpperCardLastLine />
      </div>
    </>
  );
}
export default UpperCard;
