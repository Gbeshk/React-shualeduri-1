import { useState } from "react";
import "./App.css";
import circles from "./assets/images/circles.png";
import Organism from "./components/__organism/organism/organism";
import LeftDiv from "./components/__molecules/leftdiv/leftdiv";
function App() {
  return (
    <>
      <div className="container">
        <Organism />
      </div>
    </>
  );
}

export default App;
