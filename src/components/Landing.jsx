import React, { useState } from "react";
import mainImage from "../assets/blacksparklegirls.png";
import PilotVid from "../assets/black_sparkle_girls.mp4";

  
function Landing() {
  return (
    <div className="relative bg-bgsBg h-[850px] w-screen flex flex-col justify-center items-center">
      <img className="absolute object-contain" src={mainImage} />
      <h2 className="absolute bottom-8 font-extrabold text-center text-7xl font-gloria drop-shadow-lg">
        <span className="text-bgsBgBlue">B</span>
        <span className="text-bgsBgPurple">l</span>
        <span className="text-bgsBgOrange">a</span>
        <span className="text-bgsBgYellow">c</span>
        <span className="text-bgsBgRed">k</span>
        <span className="text-bgsBgGreen"> </span>
        <span className="text-bgsBgOrange">S</span>
        <span className="text-bgsBgBlue">p</span>
        <span className="text-bgsBgPurple">a</span>
        <span className="text-bgsBgOrange">r</span>
        <span className="text-bgsBgYellow">k</span>
        <span className="text-bgsBgRed">l</span>
        <span className="text-bgsBgGreen">e</span>
        <span className="text-bgsBgBlue"> </span>
        <span className="text-bgsBgRed">G</span>
        <span className="text-bgsBgBlue">i</span>
        <span className="text-bgsBgPurple">r</span>
        <span className="text-bgsBgOrange">l</span>
        <span className="text-bgsBgYellow">s</span>
      </h2>
      <div className="gradient-border"></div>
    </div>
  );
}

export default Landing;
