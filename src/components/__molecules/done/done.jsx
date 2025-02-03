import React from "react";
import "./done.css";
import doneicon from "../../../assets/images/doneicon.svg";
function Done({ doneclass, setClassName, setDoneclass }) {
  return (
    <>
      <div className={doneclass}>
        <img src={doneicon} alt="" />
        <p className="thankyou">THANK YOU!</p>
        <p className="donep">We’ve added your card details</p>
        <button
          className="btn"
          id="continue"
          onClick={() => {
            setClassName("div");
            setDoneclass("done");
          }}
        >
          CONTINUE
        </button>
      </div>
    </>
  );
}
export default Done;
