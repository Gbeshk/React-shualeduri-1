import React, { useEffect, useState } from "react";
import Inputmask from "inputmask";
import "../registration/registration.css";

function Registration({
  setLongNumber,
  setName,
  setCcv,
  setMonth,
  setYear,
  setDoneclass,
  setClassName,
  classname,
}) {
  useEffect(() => {
    const numberinput = document.getElementById("number");
    const numbermask = new Inputmask("9999 9999 9999 9999");
    numbermask.mask(numberinput);

    const monthinput = document.getElementById("date");
    const monthmask = new Inputmask("99");
    monthmask.mask(monthinput);

    const yearinput = document.getElementById("year");
    const yearmask = new Inputmask("99");
    yearmask.mask(yearinput);

    const ccvinput = document.getElementById("cvc");
    const ccvmask = new Inputmask("999");
    ccvmask.mask(ccvinput);
  }, []);
  const [saxeli, setSaxeli] = useState("");
  const [ricxvi, setRicxvi] = useState("");

  const [tve, setTve] = useState("");

  const [weli, setWeli] = useState("");
  const [kodi, setKodi] = useState("");

  return (
    <>
      <div className={classname}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (saxeli && ricxvi && tve && weli && kodi) {
              setClassName("dissapear");
              setDoneclass("doneappear");
            }
          }}
        >
          <label htmlFor="name" className="namelabel">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="e.g. Jane Appleseed"
            className="nameinput"
            onChange={(event) => {
              setName(event.target.value);
              setSaxeli(event.target.value);
            }}
            id="name"
          />
          <label htmlFor="number" className="numberlabel">
            Card Number
          </label>
          <input
            type="text"
            placeholder="1234 5678 0000 0000"
            className="numberinput"
            id="number"
            onChange={(event) => {
              setLongNumber(event.target.value);
              setRicxvi(event.target.value);
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
                  type="text"
                  id="date"
                  placeholder="MM"
                  onChange={(event) => {
                    setMonth(event.target.value);
                    setTve(event.target.value);
                  }}
                />
                <input
                  className="dateinput year"
                  type="text"
                  id="year"
                  placeholder="YY"
                  onChange={(event) => {
                    setYear(event.target.value);
                    setWeli(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="cvcdiv">
              <label className="cvclabel">cvc</label>
              <input
                type="text"
                className="cvcinput"
                id="cvc"
                onChange={(event) => {
                  setCcv(event.target.value);
                  setKodi(event.target.value);
                }}
                placeholder="e.g. 123"
              />
            </div>
          </div>
          <button className="btn">CONFIRM</button>
        </form>
      </div>
    </>
  );
}

export default Registration;
