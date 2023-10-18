import React from "react";
import facebook from "../assets/facebook_icon.png";
import instagram from "../assets/instagram_icon.png";
import email from "../assets/email-icon.png";
import x from "../assets/x_icon.png";
import nelTv from "../assets/nelTv-logo.png"

function Footer() {
  return (
    <footer
      id="footer-section"
      className="relative flex justify-center items-center menu w-full bg-base-200 h-28"
    >
      <div className="ml-3 mt-0 h-28 w-1/12 flex flex-col absolute left-0">
        <img className="w-8/12 ml-3" src={nelTv}/>
        <p className="text-base-content font-semibold">™4Ever22Films</p>
        <p className="text-base-content font-semibold">©4Ever22Films</p>
      </div>

      <div className="absolute top-0 mt-3 text-base-content font-gloria text-base-content flex flex-row font-extrabold text-xl">
        <h2
          className="text-3xl"
          href="mailto:hmsneed@gmail.com"
          target="_blank"
        >
          SOCIALS
        </h2>
      </div>

      <div className="absolute flex flex-row w-1/12 justify-center mt-7 gap-x-1 ">
        <a href="https://www.facebook.com" target="_blank">
          <img href="https://www.instagram.com" target="_blank" src={facebook} alt="Facebook" className="" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src={instagram} alt="Instagram" className="" />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <img src={x} alt="X Logo" />
        </a>

        <a href="mailto:hmsneed@gmail.com" target="_blank">
          <img src={email} alt="email icon" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
