import React from "react";
import Sidebar from "./Components/sidebar/Sidebar";
import Dashboard from "./Components/Dashboard/Dashboard";

const Main = () => {
  return (
    <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
      <Sidebar />
      <div className="h-screen flex-grow-1 overflow-y-lg-auto">
        <Dashboard />
      </div>
    </div>
  );
};

export default Main;
