import React from "react";
import PilotVid from "../assets/black_sparkle_girls.mp4";

function Pilot() {
  return (
    <div className="flex justify-center items-center bg-bgsBg h-screen w-full px-4">
      <video className='rounded-xl -mt-24' width="640" height="360" controls>
        <source src={PilotVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Pilot;
