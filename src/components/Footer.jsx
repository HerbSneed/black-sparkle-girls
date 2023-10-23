// import React from "react";
import facebook from "../assets/facebook_icon.png";
import instagram from "../assets/instagram_icon.png";
import email from "../assets/email-icon.png";
import x from "../assets/x_icon.png";
import nelTv from "../assets/nelTv-logo.png"

function Footer() {
  return (
    <footer
      id="footer-section"
      className="flex flex-col justify-center items-center w-full py-2 bg-base-200"
    >
      <h2 className="font-gloria text-3xl sm:text-4xl">SOCIALS</h2>

      <div className="flex flex-row w-4/12 sm:w-3/12 lg:w-2/12 justify-center mt-0 gap-x-1 ">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img
            href="https://www.instagram.com"
            target="_blank"
            src={facebook}
            alt="Facebook"
            className=""
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram" className="" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <img src={x} alt="X Logo" />
        </a>

        <a href="mailto:hmsneed@gmail.com" target="_blank" rel="noreferrer">
          <img src={email} alt="email icon" />
        </a>
      </div>

      <div className="w-1/4 flex flex-row items-center -mt-0 sm:-mt-1 justify-center">
        <img className="w-4/12 md:w-3/12 lg:w-2/12 ml-0 mt-1" src={nelTv} />
        <p className="ml-1 mt-3 text-base-content font-semibold">
          ©™4Ever22Films
        </p>
      </div>
    </footer>
  );
}
export default Footer;
