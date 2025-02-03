import React from "react";
import UpperCardInfo from "../../__atoms/uppercardinfo/uppercardinfo";
import "../uppercard/uppercard.css";
import UpperCardLastLine from "../../__atoms/uppercardlastline/uppercardlastline";
function UpperCard({ longnumber, name, month, year }) {
  return (
    <>
      <div className="uppercard">
        <UpperCardInfo longnumber={longnumber} />
        <UpperCardLastLine name={name} month={month} year={year} />
      </div>
    </>
  );
}
export default UpperCard;
