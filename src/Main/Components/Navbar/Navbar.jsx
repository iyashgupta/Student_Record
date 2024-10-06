import React from "react";
import "./Navbar.css";
import AuthSidebar from "./AuthSIdebar/AuthSidebar";

const Navbar = () => {
  const logedIn = true;
  return (
    <nav className="navbar">
      <div className="navbar-left">YourName</div>

      {logedIn ? <AuthSidebar /> : <span>rightbar</span>}
    </nav>
  );
};

export default Navbar;
