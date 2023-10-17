import React from "react";
import facebook from "../assets/facebook_icon.png";
import instagram from "../assets/instagram_icon.png";
import x from "../assets/x_icon.png";

function Footer() {
  return (
    <footer className="relative flex justify-center items-center menu w-full bg-base-200 h-28">
      <div className="ml-3 mt-20 absolute left-0">
        <p className="text-base-content font-semibold">™4Ever22Films</p>
        <p className="text-base-content font-semibold">©4Ever22Films</p>
      </div>

      <div className="absolute top-0 mt-3 text-base-content font-gloria text-base-content flex flex-row font-extrabold text-xl">
        <a href="mailto:hmsneed@gmail.com" target="_blank">
          CONTACT US
        </a>
      </div>

      <div className="absolute flex flex-row w-1/12 justify-center mt-5 gap-x-1 ">
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
    </footer>
  );
}
export default Footer;
