import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul className="list-decimal underline m-10 space-y-2">
        <li>
          <Link to="/poker">Poker Probability Calculator</Link>
        </li>
        <li>
          <Link to="/airtable">Airtable Embed</Link>
        </li>
        <li>
          <Link to="/firebase-chat">Firebase Chat</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
