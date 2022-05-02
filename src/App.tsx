import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "./common/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="flex flex-row">
        <div>
          <Sidebar></Sidebar>
        </div>

        <div className="flex-1 ml-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
