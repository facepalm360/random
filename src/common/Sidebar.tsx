import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Sidebar() {
  function handleActive({ isActive }: { isActive: boolean }) {
    return isActive ? "text-red-600  " : "";
  }

  return (
    <div>
      <ul className="list underline m-10 space-y-2">
        <li>
          <NavLink to="/">🏠</NavLink>
        </li>
        <li>
          <NavLink to="/poker" className={handleActive}>
            Poker Probability Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/airtable" className={handleActive}>
            Airtable Embed
          </NavLink>
        </li>
        <li>
          <NavLink to="/firebase-chat" className={handleActive}>
            Firebase Chat
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
