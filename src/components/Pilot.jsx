import React from "react";
import PilotVid from "../assets/black_sparkle_girls.mp4";

function Pilot() {
  return (
    <div className="bg-bgsBg h-[760px] w-screen py-5 flex justify-center relative">
      <h1 className="absolute text-5xl mt-3 text-white font-gloria">
        The Case of the Invisible Force
      </h1>
      <video className="rounded-xl mt-10" width="1080" height="720" controls>
        <source src={PilotVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Pilot;
