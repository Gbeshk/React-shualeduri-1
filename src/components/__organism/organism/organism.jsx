import React, { useState } from "react";
import "../organism/organism.css";
import UpperCard from "../../__molecules/uppercard/uppercard";
import LeftDiv from "../../__molecules/leftdiv/leftdiv";
import BottomCard from "../../__molecules/bottomcard/bottomcard";
import Registration from "../../__molecules/registration/registration";
import Done from "../../__molecules/done/done";
function Organism() {
  const [longnumber, setLongNumber] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("Beshkenadze Giorgi");
  const [ccv, setCcv] = useState("000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [doneclaas, setDoneclass] = useState("done");
  const [classname, setClassName] = useState("div");

  return (
    <div className="organism">
      <LeftDiv
        ccv={ccv}
        longnumber={longnumber}
        name={name}
        month={month}
        year={year}
      />
      <Registration
        setLongNumber={setLongNumber}
        setName={setName}
        setCcv={setCcv}
        setMonth={setMonth}
        setYear={setYear}
        setDoneclass={setDoneclass}
        setClassName={setClassName}
        classname={classname}
        name={name}
      />
      <Done
        doneclass={doneclaas}
        setClassName={setClassName}
        setDoneclass={setDoneclass}
      />
    </div>
  );
}

export default Organism;
