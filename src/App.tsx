import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/poker">Poker Probability Calculator</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
