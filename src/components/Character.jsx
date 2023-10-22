// import React from "react";
import Catrina from "../assets/Catrina.png";
import Daijah from "../assets/Daijah.png";
import Jade from "../assets/Jade.png";
import Mariah from "../assets/Mariah.png";

function Characters() {
  return (
    <div
      id="character-section"
      className="relative py-4 bg-bgsBgYellow flex flex-col justify-center w-screen "
    >
      <h2 className="text-center text-5xl text-white font-bold font-gloria drop-shadow-md">
        <span className="text-bgsBgBlue">T</span>
        <span className="text-bgsBgPurple">h</span>
        <span className="text-bgsBgOrange">e</span>
        <span className="text-bgsBgGreen"> </span>
        <span className="text-bgsBgRed">G</span>
        <span className="text-bgsBgGreen">i</span>
        <span className="text-bgsBgBlue">r</span>
        <span className="text-bgsBgPurple">l</span>
        <span className="text-bgsBgOrange">s</span>
      </h2>

      <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-y-4 w-screen mt-2 ">
        <li className="border-4 border-bgsBgRed w-11/12 mx-auto rounded-xl bg-bgsBgRed drop-shadow-xl pb-1">
          <div className="h-96 overflow-hidden w-full rounded-t-lg bg-white ">
            <img
              className="w-full sm:w-3/4 transform -translate-x-8 sm:-translate-x-0 -translate-y-3 object-cover"
              src={Mariah}
              alt="Catrina Image"
            />
          </div>
          <h2 className="text-center font-gloria text-4xl font-bold text-white ">
            Mariah
          </h2>
          <p className="text-white text-xl text-center mt-1 mx-2">
            Lorem ipsum dolor sit amet. Nam omnis dolores quo omnis galisum qui
            perspiciatis eligendi. Et suscipit expedita cum autem sint aut
            repudiandae facilis ad corporis laborum est autem nisi non tempore
            exercitationem.
          </p>
        </li>

        <li className="border-4 border-bgsBgBlue bg-bgsBgBlue rounded-xl w-11/12 mx-auto drop-shadow-xl">
          <div className="h-96 rounded-t-lg bg-white overflow-hidden">
            <img
              className="w-full sm:w-3/4 sm:ml-14 transform -translate-y-9  object-cover"
              src={Daijah}
            />
          </div>
          <h2 className="text-center font-gloria text-4xl font-bold text-white ">
            Daijah
          </h2>
          <p className="text-white text-center text-xl mt-3 mx-2">
            Lorem ipsum dolor sit amet. Nam omnis dolores quo omnis galisum qui
            perspiciatis eligendi. Et suscipit expedita cum autem sint aut
            repudiandae facilis ad corporis laborum est autem nisi non tempore
            exercitationem.
          </p>
        </li>

        <li className="border-4 border-bgsBgOrange bg-bgsBgOrange rounded-xl w-11/12 mx-auto drop-shadow-xl">
          <div className="h-96 rounded-t-lg bg-white overflow-hidden">
            <img
              className="w-full sm:w-2/4 sm:mx-auto transform -translate-y-4 object-cover"
              src={Jade}
            />
          </div>
          <h2 className="text-center font-gloria text-4xl font-bold text-white ">
            Jade
          </h2>
          <p className="text-white text-center text-xl mt-1 mx-2">
            Lorem ipsum dolor sit amet. Nam omnis dolores quo omnis galisum qui
            perspiciatis eligendi. Et suscipit expedita cum autem sint aut
            repudiandae facilis ad corporis laborum est autem nisi non tempore
            exercitationem.
          </p>
        </li>

        <li className="border-4 border-bgsBg bg-bgsBg rounded-xl w-11/12 mx-auto drop-shadow-xl">
          <div className="h-96 rounded-t-lg bg-white overflow-hidden">
            <img
              className="w-full sm:w-2/4 sm:mx-auto transform -translate-y-0 object-cover"
              src={Catrina}
            ></img>
            n
          </div>
          <h2 className="text-center font-gloria text-4xl font-bold text-white">
            Catrina
          </h2>
          <p className="text-white text-center text-xl mt-1 mx-2">
            Lorem ipsum dolor sit amet. Nam omnis dolores quo omnis galisum qui
            perspiciatis eligendi. Et suscipit expedita cum autem sint aut
            repudiandae facilis ad corporis laborum est autem nisi non tempore
            exercitationem.
          </p>
        </li>
      </ul>
      <div className="gradient-border_2"></div>
    </div>
  );
}

export default Characters;
