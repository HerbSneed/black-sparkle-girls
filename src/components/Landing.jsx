import React, { useState } from "react";
import mainImage from "../assets/blacksparklegirls.png";
import PilotVid from "../assets/black_sparkle_girls.mp4";

  
function Landing() {
  return (
    <div>
      <div className="bg-bgsBg h-[700px] w-screen flex justify-center">
        <img className="object-contain" src={mainImage} />
      </div>  
    </div>
  );
}

export default Landing;
