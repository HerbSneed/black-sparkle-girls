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

      <div className="flex flex-row w-4/12 sm:w-3/12 md:w-[140px] lg:w-2/12 xl:w-[150px] 2xl:w-[150px] justify-center mt-0 ml-1 space-x-1 ">
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

        <a href="mailto:pierreneltv@gmail.com" target="_blank" rel="noreferrer">
          <img src={email} alt="email icon" />
        </a>
      </div>

      <div className="w-full flex flex-row items-center -ml-4 -mt-5 sm:-mt-4 lg:-mt-6 xl:-mt-7 2xl:-mt-9 justify-center">
        <img
          className="w-[45px] sm:w-1/12 md:w-[45px] lg:w-[50px] xl:w-[60px] 2xl:w-[70px] ml-0 mt-3 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-3"
          src={nelTv}
        />
        <p className="ml-1 mt-6 lg:mt-7 2xl:mt-9  text-base-content font-semibold 2xl:text-xl">
          ©™ A Peggy Joyce&apos;s Boy Production
        </p>
      </div>
    </footer>
  );
}
export default Footer;
