import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../Navbar.css";

const AuthSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="navbar-right">
      <div className="container-nav">
        <span
          className={`animated-text ${
            pathname !== "/signup" ? "active-auth-tab" : ""
          }`}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </div>
      <div className="container-nav">
        <span
          className={`animated-text ${
            pathname === "/signup" ? "active-auth-tab" : ""
          } `}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
};

export default AuthSidebar;
