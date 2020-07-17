import React from "react";
import Navbar from "./Navbar/Navbar.js";
import Homepage from "./Homepage/Homepage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
