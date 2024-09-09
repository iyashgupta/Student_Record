import React from "react";

const Sidebar = () => {
  return (
    <nav
      className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
      id="navbarVertical"
    >
      <div className="container-fluid">
        {/* Toggler  */}
        <button
          className="navbar-toggler ms-n2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarCollapse"
          aria-controls="sidebarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Brand  */}
        <span className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0">
          <img
            src="https://preview.webpixels.io/web/img/logos/clever-primary.svg"
            alt="..."
          />
        </span>
        {/* User menu (mobile)  */}
        <div className="navbar-user d-lg-none">
          {/* Dropdown  */}
          <div className="dropdown">
            {/* Toggle  */}
            <span
              id="sidebarAvatar"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="avatar-parent-child">
                <img
                  alt="Placeholder"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                  className="avatar avatar- rounded-circle"
                />
                <span className="avatar-child avatar-badge bg-success"></span>
              </div>
            </span>
            {/* Menu  */}
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
        </div>
        {/* Collapse  */}
        <div className="collapse navbar-collapse" id="sidebarCollapse">
          {/* Navigation  */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link">
                <i className="bi bi-house"></i> Dashboard
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <i className="bi bi-chat"></i> Messages
                <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                  6
                </span>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <i className="bi bi-people"></i> Users
              </span>
            </li>
          </ul>
          {/*  Navigation */}
          <ul className="navbar-nav mb-md-4">
            <li>
              <div className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide">
                Highest Marks
                <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
                  3
                </span>
              </div>
            </li>
            <li>
              <span className="nav-link d-flex align-items-center">
                <div className="me-4">
                  <div className="position-relative d-inline-block text-white">
                    <img
                      alt="Placeholder"
                      src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      className="avatar rounded-circle"
                    />
                    <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                  </div>
                </div>
                <div>
                  <span className="d-block text-sm font-semibold">
                    Marie Claire
                  </span>
                  <span className="d-block text-xs text-muted font-regular">
                    Paris, FR
                  </span>
                </div>
                <div className="ms-auto">
                  <i className="bi bi-chat"></i>
                </div>
              </span>
            </li>
            <li>
              <span className="nav-link d-flex align-items-center">
                <div className="me-4">
                  <div className="position-relative d-inline-block text-white">
                    <span className="avatar bg-soft-warning text-warning rounded-circle">
                      JW
                    </span>
                    <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                  </div>
                </div>
                <div>
                  <span className="d-block text-sm font-semibold">
                    Michael Jordan
                  </span>
                  <span className="d-block text-xs text-muted font-regular">
                    Bucharest, RO
                  </span>
                </div>
                <div className="ms-auto">
                  <i className="bi bi-chat"></i>
                </div>
              </span>
            </li>
            <li>
              <span className="nav-link d-flex align-items-center">
                <div className="me-4">
                  <div className="position-relative d-inline-block text-white">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      className="avatar rounded-circle"
                    />
                    <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle"></span>
                  </div>
                </div>
                <div>
                  <span className="d-block text-sm font-semibold">
                    Heather Wright
                  </span>
                  <span className="d-block text-xs text-muted font-regular">
                    London, UK
                  </span>
                </div>
                <div className="ms-auto">
                  <i className="bi bi-chat"></i>
                </div>
              </span>
            </li>
          </ul>
          {/* Push content down  */}
          <div className="mt-auto"></div>
          {/* User (md)  */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link">
                <i className="bi bi-box-arrow-left"></i> Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
