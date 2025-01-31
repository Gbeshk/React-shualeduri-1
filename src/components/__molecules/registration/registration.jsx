import React from "react";
import "../registration/registration.css";
import { useState } from "react";
import UpperCardInfo from "../../__atoms/uppercardinfo/uppercardinfo";
function Registration() {
  const [numbervalue, setNumberValue] = useState("");
  return (
    <>
      <form>
        <label htmlFor="name" className="namelabel">
          Cardholder Name
        </label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          className="nameinput"
          id="name"
        />
        <label htmlFor="number" className="numberlabel">
          Card Number
        </label>
        <input
          type="number"
          placeholder="1234 5678 0000 0000"
          className="numberinput"
          id="number"
          onChange={(event) => {
            setNumberValue(event.target.value);
            console.log(numbervalue);
          }}
        />
        <div className="dateandcodediv">
          <div className="datediv">
            <label htmlFor="date" className="datelabel">
              Exp. Date (MM/YY)
            </label>
            <div className="monthandyear">
              <input
                className="dateinput"
                type="number"
                id="date"
                placeholder="MM"
              />
              <input
                className="dateinput year"
                type="number"
                placeholder="YY"
              />
            </div>
          </div>
          <div className="cvcdiv">
            <label className="cvclabel" htmlFor="cvc">
              cvc
            </label>
            <input
              type="number"
              className="cvcinput"
              id="cvc"
              placeholder="e.g. 123"
            />
          </div>
        </div>
        <button className="btn">CONFIRM</button>
      </form>
    </>
  );
}
export default Registration;
