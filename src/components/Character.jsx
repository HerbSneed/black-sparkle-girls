// import React from "react";
import Catrina from "../assets/Catrina.webp";
import Daijah from "../assets/Daijah.webp";
import Jade from "../assets/Jade.webp";
import Mariah from "../assets/Mariah.webp";

function Characters() {
  return (
    <div
      id="character-section"
      className="relative py-4 bg-bgsBgYellow flex flex-col justify-center w-full "
    >
      <h2 className="text-center text-5xl sm:text-[60px] lg:text-[70px] xl:text-[90px] text-white font-bold font-gloria drop-shadow-md">
        <span className="text-bgsBgBlue">T</span>
        <span className="text-bgsBgPurple">h</span>
        <span className="text-bgsBgOrange">e</span>
        <span className="text-bgsBgGreen tracking-[-10px]"> </span>
        <span className="text-bgsBgRed">G</span>
        <span className="text-bgsBgGreen">i</span>
        <span className="text-bgsBgBlue">r</span>
        <span className="text-bgsBgPurple">l</span>
        <span className="text-bgsBgOrange">s</span>
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 w-full mt-2 lg:mt-4 ">
        <li className="border-4 border-bgsBgRed order-4 w-11/12 mx-auto rounded-xl bg-bgsBgRed drop-shadow-xl pb-1">
          <div className="h-96 overflow-hidden w-full rounded-t-lg bg-white ">
            <img
              className="w-full sm:w-3/4 xl:w-full transform -translate-x-8 sm:-translate-x-0 xl:-translate-x-7 -translate-y-3 object-cover"
              src={Mariah}
              alt="Mariah Image"
            />
          </div>
          <h2 className="text-center font-gloria text-4xl sm:text-[60px]font-bold text-white ">
            Mariah
          </h2>
          <p className="text-white text-xl text-center font-gloria mt-1 mx-2">
            Mariah is the youngest sister. She&apos;s clumsy in the lab but
            solid in her pro-blackness.
          </p>
        </li>

        <li className="border-4 order-3 border-bgsBgBlue bg-bgsBgBlue rounded-xl w-11/12 mx-auto drop-shadow-xl">
          <div className="h-96 rounded-t-lg bg-white overflow-hidden">
            <img
              className="w-full sm:w-3/4 xl:w-full -ml-3 sm:ml-14 md:ml-10 md:mt-3 transform -translate-y-9 object-cover xl:-translate-x-14"
              src={Daijah}
              alt="Daijah Image"
            />
          </div>
          <h2 className="text-center font-gloria text-4xl font-bold text-white ">
            Daijah
          </h2>
          <p className="text-white text-center text-xl mt-3 mx-2 font-gloria">
            Daijah is the lazy one. She sleeps in her spare time and is not
            really into science.
          </p>
        </li>

        <li className="border-4 border-bgsBgOrange bg-bgsBgOrange rounded-xl w-11/12 mx-auto drop-shadow-xl order-1">
          <div className="h-96 rounded-t-lg bg-[#FDFDFD] overflow-hidden">
            <img
              className="w-3/4 sm:w-2/4 md:w-3/4 xl:w-full mx-auto sm:mx-auto transform -translate-y-4 object-cover xl:-translate-x-0"
              src={Jade}
              alt="Jade Image"
            />
          </div>
          <h2 className="text-center font-gloria text-4xl font-bold text-white ">
            Jade
          </h2>
          <p className="text-white text-center text-xl mt-1 font-gloria mx-2">
            Jade&apos;s the leader of the Black Sparkle Girls. She&apos;s an
            athlete with a love for softball.
          </p>
        </li>

        <li className="border-4 border-bgsBg bg-bgsBg order-2 rounded-xl w-11/12 mx-auto pb-2 drop-shadow-xl">
          <div className="h-96 rounded-t-lg bg-[#FDFDFD] overflow-hidden">
            <img
              className="w-3/4 sm:w-2/4 md:w-3/4 xl:w-full mx-auto sm:mx-auto transform -translate-y-0 object-cover"
              src={Catrina}
              alt="Catrina Image"
            ></img>
          </div>
          <h2 className="text-center font-gloria text-4xl font-bold text-white">
            Catrina
          </h2>
          <p className="text-white text-center font-gloria text-xl mt-1 mx-2">
            Catrina is the brains of the bunch. She&apos;s a critical thinker
            with a love for dogs.
          </p>
        </li>
      </ul>
      <div className="gradient-border_2"></div>
    </div>
  );
}

export default Characters;
