import React from "react";
import "./App.css";
import DashBoard from "./DashBoard/DashBoard";
import Mapbox from "./Map/Mapbox";

function App() {
  return (
    <div className="App">
      <Mapbox>
        <DashBoard />
      </Mapbox>
    </div>
  );
}

export default App;
