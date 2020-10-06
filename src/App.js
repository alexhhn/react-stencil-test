import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@alexwebstep/test-stencil";

function App() {
  return (
    <div className="App">
      <img className="App-logo" src={logo} alt="logo" />
      <div style={{ maxWidth: 1100, margin: "auto" }}>
        <my-component title="Tall og data fra kraftsystemet" />
      </div>
    </div>
  );
}

export default App;
