import React from "react";
import PilotVid from "../assets/black_sparkle_girls.mp4";

function Pilot() {
  return (
    <div
      id="pilot-section"
      className="bg-bgsBg h-[720px] w-screen py-5 flex justify-center relative"
    >
      <h1 className="absolute drop-shadow-md text-6xl mt-0 text-white font-gloria">
        <span className="text-bgsBgBlue">T</span>
        <span className="text-bgsBgPurple">h</span>
        <span className="text-bgsBgOrange">e</span>
        <span className="text-bgsBgYellow"> </span>
        <span className="text-bgsBgRed">C</span>
        <span className="text-bgsBgGreen">a</span>
        <span className="text-bgsBgBlue">s</span>
        <span className="text-bgsBgPurple">e</span>
        <span className="text-bgsBgOrange"> </span>
        <span className="text-bgsBgYellow">o</span>
        <span className="text-bgsBgRed">f</span>
        <span className="text-bgsBgGreen"> </span>
        <span className="text-bgsBgBlue">t</span>
        <span className="text-bgsBgPurple">h</span>
        <span className="text-bgsBgOrange">e</span>
        <span className="text-bgsBgYellow"> </span>
        <span className="text-bgsBgRed">I</span>
        <span className="text-bgsBgGreen">n</span>
        <span className="text-bgsBgBlue">v</span>
        <span className="text-bgsBgPurple">i</span>
        <span className="text-bgsBgOrange">s</span>
        <span className="text-bgsBgYellow">i</span>
        <span className="text-bgsBgRed">b</span>
        <span className="text-bgsBgGreen">l</span>
        <span className="text-bgsBgBlue">e</span>
        <span className="text-bgsBgPurple"> </span>
        <span className="text-bgsBgOrange">F</span>
        <span className="text-bgsBgYellow">o</span>
        <span className="text-bgsBgRed">r</span>
        <span className="text-bgsBgGreen">c</span>
        <span className="text-bgsBgBlue">e</span>
      </h1>
      <div className="mt-10">
        <video
          className="rounded-xl mt-10"
          width="1080"
          height="720"
          controls
          poster="../src/assets/bgsScreenshot.png"
        >
          <source src={PilotVid} type="video/mp4" />
        </video>
      </div>
      <div className="gradient-border"></div>
    </div>
  );
}

export default Pilot;
