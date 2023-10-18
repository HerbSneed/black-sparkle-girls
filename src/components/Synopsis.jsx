import React, { useState } from "react";

function Synopsis() {
  return (
    <div
      id="synopsis-section"
      className="bg-bgsBgPurple h-[520px] w-screen flex justify-center relative"
    >
      <h2 className="absolute drop-shadow-md text-white text-center text-5xl font-gloria font-bold mt-6">
        <span className="text-bgsBgBlue">S</span>
        <span className="text-bgsBgGreen">Y</span>
        <span className="text-bgsBgOrange">N</span>
        <span className="text-bgsBgYellow">O</span>
        <span className="text-bgsBgRed">P</span>
        <span className="text-bgsBgGreen">S</span>
        <span className="text-bgsBgBlue">I</span>
        <span className="text-bgsBgRed">S</span>
      </h2>
      <p className="absolute text-white drop-shadow-md mt-20 mx-14 text-xl">
        The Black Sparkle Girls is an inspirational new children's show
        dedicated to spreading knowledge and empowering young black minds. It
        follows the adventures of four sisters—Jade, Daijah, Catrina, and Mariah
        Sparkle—who are scientists teaching STEM, black history, civil
        rights,etc. from their home basement.
        <br />
        <br />
        In an energetic blend of music, comedy, and education, the Sparkle
        sisters engage with their young audience through sing-along nursery
        rhymes and interactive history lessons. Each show culminates in an
        uplifting concert performance where the girls summarize the episode's
        key teachings through song and dance.
        <br />
        <br />
        The Black Sparkle Girls are on a mission to honor the legacy of the four
        little girls who were killed in the 16th Street Baptist Church bombing
        on September 15, 1963, in Birmingham, Alabama, as well as the fifth girl
        who miraculously survived the blast. The show also memorializes the two
        young boys shot that same tragic day in Birmingham. By promoting
        education and equality, it aims to inspire the next generation of black
        scientists, inventors, and leaders.
        <br />
        <br />
        With their intelligence, charm, and passion for helping others, the
        Sparkle sisters are role models, showing all children the wonders of
        science and the power we each have to change the world. The Black
        Sparkle Girls bring fun and smiles to essential conversations about
        diversity acceptance, and working together to build a better future.
      </p>
      <div className="gradient-border"></div>
    </div>
  );
}

export default Synopsis;
