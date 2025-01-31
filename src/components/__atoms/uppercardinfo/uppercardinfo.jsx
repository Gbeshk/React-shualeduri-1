import React from "react";
import "../uppercardinfo/uppercardinfo.css";
import circles from "../../../assets/images/circles.png";
function UpperCardInfo({ longnumber }) {
  console.log(longnumber);

  return (
    <>
      <img src={circles} className="circles" alt="" />
      <p className="longnumbers">0000 0000 0000 0000</p>
    </>
  );
}
export default UpperCardInfo;
