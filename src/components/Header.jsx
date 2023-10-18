import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/bgs-nav.png";

function Header() {
  return (
    <nav className="relative menu w-full bg-base-900 h-24">
      <div className="relative w-44 ml-4">
        <div className="border-inset-gradient"></div>
        <img src={navLogo} alt="black girl sparkle logo" />
      </div>
      <div className="absolute inset-0 flex justify-end items-center">
        <div className="font-gloria text-base-content flex flex-row font-extrabold text-xl">
          <a
            href="#pilot-section"
            className="mr-5 hover:text-bgsBgBlue hover:drop-shadow-md"
          >
            PILOT
          </a>
          <a
            href="#character-section"
            className="mr-5 hover:text-bgsBgPurple hover:drop-shadow-md"
          >
            THE GIRLS
          </a>
          <a
            href="#synopsis-section"
            className="mr-5 hover:text-bgsBgOrange hover:drop-shadow-md"
          >
            SYNOPSIS
          </a>
          <a
            href="#footer-section"
            className="mr-5 hover:text-bgsBgRed hover:drop-shadow-md"
          >
            CONTACT US
          </a>
        </div>
      </div>
      <div className="gradient-border"></div>
    </nav>
  );
}

export default Header;
