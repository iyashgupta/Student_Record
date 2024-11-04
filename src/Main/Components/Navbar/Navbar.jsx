import React, { useEffect, useState } from "react";
import "./Navbar.css";
import AuthSidebar from "./AuthSIdebar/AuthSidebar";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  },[]);
  return (
    <nav className="navbar">
      <div className="navbar-left">YourName</div>
      {!loggedIn ? <AuthSidebar /> : <span>Rightbar</span>}
    </nav>
  );
};

export default Navbar;
