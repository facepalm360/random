import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul className="list-decimal underline m-10">
        <li>
          <Link to="/poker">Poker Probability Calculator</Link>
          <li>
            <Link to="/airtable">Airtable Embed</Link>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default App;
