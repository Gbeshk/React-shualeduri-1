import { useState } from "react";
import "./App.css";
import circles from "./assets/images/circles.png";
import Organism from "./components/__organism/organism/organism";
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
