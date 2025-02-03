import React from "react";
import "../uppercardinfo/uppercardinfo.css";
import circles from "../../../assets/images/circles.png";

function UpperCard({ longnumber }) {
  return (
    <>
      <img src={circles} className="circles" alt="" />
      <p className="longnumbers">{longnumber}</p>
    </>
  );
}

export default UpperCard;
