import React from "react";
import "../uppercardlastline/uppercardlastline.css";
function UpperCardLastLine({ name, month, year }) {
  return (
    <>
      <div className="uppercardlastline">
        <p className="username">{name}</p>
        <p className="carddate">
          {month}/<span>{year}</span>
        </p>
      </div>
    </>
  );
}
export default UpperCardLastLine;
