import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook_icon.png";
import instagram from "../assets/instagram_icon.png";
import x from "../assets/x_icon.png";
import navLogo from "../assets/bgs-nav.png";

function Header() {
  return (
    <nav className="relative menu w-full bg-base-900 h-24">
      <div className="w-44 ml-4">
        <img src={navLogo} alt='black girl sparkle logo'/>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">

        <div className="font-gloria text-base-content flex flex-row font-extrabold text-xl">
          <Link to="/Pilot" className="mr-5">
            PILOT
          </Link>
          <Link to="/Characters" className="mr-5">
            CHARACTERS
          </Link>
          <Link to="/Synopsis" className="mr-5">
            SYNOPSIS
          </Link>
          <a href="mailto:hmsneed@gmail.com" target="_blank">
            CONTACT US
          </a>
        </div>
      </div>

      <div className="absolute right-0 mr-4 flex w-1/12 mt-5 gap-x-1 ">
        <a>
          <img src={facebook} alt="Facebook" className="" />
        </a>
        <a>
          <img src={instagram} alt="Instagram" className="" />
        </a>
        <a>
          <img src={x} alt="X Logo" />
        </a>
      </div>
    </nav>
  );
}

export default Header;
