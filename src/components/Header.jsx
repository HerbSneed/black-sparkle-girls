import React, { useState } from "react";

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {/* Replace the "Open drawer" button with a navicon */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className={`drawer-side ${isSidebarVisible ? "active" : ""}`}>
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu w-full min-h-1/2 bg-base-200 text-base-content flex items-center">
          {/* Sidebar content here */}

          <button
            className="btn btn-square btn-ghost"
            onClick={toggleSidebar}
            style={{ position: "absolute", top: "0rem", left: "1rem" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>PILOT</a>
          </li>
          <li>
            <a>CHARACTERS</a>
          </li>
          <li>
            <a>SYNOPSIS</a>
          </li>
          <li>
            <a>INVEST</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
