import React, { useState } from "react";
import ToperSidebar from "../sidebar/ToperSidebar/ToperSidebar";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SideBarLogoHeader from "./SidebarLogoHeader/SideBarLogoHeader";
import "../sidebar/Sidebar.css"; // Assuming you use CSS modules or a similar approach for styles
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState('Dashboard');
  const navigate=useNavigate()

  return (
    <nav
      className="navbar show navbar-vertical  navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
      id="navbarVertical"
    >
      <div className="container-fluid">
        {/* SideBar Logo Header */}
        <SideBarLogoHeader />

        {/* User menu (mobile) */}
        {/* <div className="navbar-user d-lg-none">
          <div className="dropdown">
            <span
              id="sidebarAvatar"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar-parent-child cursor-pointer">
                <img
                  alt="Placeholder"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  className="avatar avatar- rounded-circle"
                />
                <span className="avatar-child avatar-badge bg-success"></span>
              </div>
            </span>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="sidebarAvatar"
            >
              <span className="dropdown-item">Profile</span>
              <span className="dropdown-item">Settings</span>
              <span className="dropdown-item">Billing</span>
              <hr className="dropdown-divider" />
              <span className="dropdown-item">Logout</span>
            </div>
          </div>
        </div> */}

        {/* Collapse */}
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          {/* Navigation */}
          <ul className="navbar-nav" >
            <li className="nav-item" onClick={() => navigate('/dashboard')}>
              <span
                className={`nav-link cursor-pointer ${selectedTab === 'Dashboard' ? 'active-tab' : ''}`}
                onClick={() => setSelectedTab('Dashboard')}
              >
                <i className={`bi bi-house ${selectedTab === 'Dashboard' ? 'active-icon' : ''}`}></i>
                Dashboard
              </span>
            </li>
            <li className="nav-item" onClick={() => navigate('/blog/register')}>
              <span  className={`nav-link cursor-pointer ${selectedTab === 'Add Blog' ? 'active-tab' : ''}`}
                onClick={() => setSelectedTab('Add Blog')}>
                <i className={`bi bi-chat ${selectedTab === 'Add Blog' ? 'active-icon' : ''}`}></i> Add New Blog
                <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                  6
                </span>
              </span>
            </li>
            <li className="nav-item cursor-pointer">
            <span  className={`nav-link cursor-pointer `}>
                <i className={`bi bi-people`}></i> Student List
              </span>
            </li>
          </ul>

          {/*  Navigation */}
          <div>
            <ToperSidebar />
          </div>

          {/* Push content down */}
          <div className="mt-auto"></div>

          {/* User (md) */}
          <ul className="navbar-nav">
            <SidebarFooter />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
