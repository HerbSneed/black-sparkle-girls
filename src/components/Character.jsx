import React from "react";
import Catrina from "../assets/Catrina.png";
import Daijah from "../assets/Daijah.png";
import Jade from "../assets/Jade.png";
import Mariah from "../assets/Mariah.png";

function Characters() {
  return (
    <>
      <div className="py-5 bg-bgsBgYellow h-[680px] w-screen">
        <h2 className="text-center text-5xl text-white font-bold font-gloria text-shadow-xl">
          Characters
        </h2>
        <ul className="grid grid-cols-4 gap-x-0 mt-5 ">
          <li className="border-4 border-bgsBgRed w-11/12 mx-auto rounded-xl bg-bgsBgRed pb-1">
            <div className="h-96 overflow-hidden rounded-t-lg bg-white ">
              <img
                className="w-full transform -translate-x-8 -translate-y-3 object-cover"
                src={Catrina}
                alt="Catrina Image"
              />
            </div>
            <h2 className="text-center font-gloria text-3xl font-bold text-white ">
              Catrina
            </h2>
            <p className="text-white mt-1">
              Lorem ipsum dolor sit amet. Nam omnis dolores quo omnis galisum
              qui perspiciatis eligendi. Et suscipit expedita cum autem sint aut
              repudiandae facilis ad corporis laborum est autem nisi non tempore
              exercitationem.
            </p>
          </li>

          <li className="border-4 border-bgsBgBlue bg-bgsBgBlue rounded-xl w-11/12  mx-auto">
            <div className="h-96 rounded-t-lg overflow-hidden">
              <img
                className="w-full transform -translate-y-9  object-cover"
                src={Daijah}
              />
            </div>
            <h2 className="text-center font-gloria text-3xl font-bold text-white ">
              Daijah
            </h2>
            <p className="text-white mt-1">
              Lorem ipsum dolor sit amet. Nam omnis dolores quo omnis galisum
              qui perspiciatis eligendi. Et suscipit expedita cum autem sint aut
              repudiandae facilis ad corporis laborum est autem nisi non tempore
              exercitationem.
            </p>
          </li>

          <li className="border-4 border-bgsBgOrange bg-bgsBgOrange rounded-xl w-11/12  mx-auto">
            <div className="h-96 rounded-t-lg overflow-hidden">
              <img
                className="w-full transform -translate-y-4 object-cover"
                src={Jade}
              />
            </div>
            <h2 className="text-center font-gloria text-3xl font-bold text-white ">
              Jade
            </h2>
            <p className="text-white mt-1">
              Lorem ipsum dolor sit amet. Nam omnis dolores quo omnis galisum
              qui perspiciatis eligendi. Et suscipit expedita cum autem sint aut
              repudiandae facilis ad corporis laborum est autem nisi non tempore
              exercitationem.
            </p>
          </li>

          <li className="border-4 border-bgsBg bg-bgsBg rounded-xl w-11/12  mx-auto">
            <div className="h-96 rounded-t-lg overflow-hidden">
              <img
                className="w-full transform -translate-y-0 object-cover"
                src={Mariah}
              ></img>
              n
            </div>
            <h2 className="text-center font-gloria text-3xl font-bold text-white">
              Mariah
            </h2>
            <p className="text-white mt-1">
              Lorem ipsum dolor sit amet. Nam omnis dolores quo omnis galisum
              qui perspiciatis eligendi. Et suscipit expedita cum autem sint aut
              repudiandae facilis ad corporis laborum est autem nisi non tempore
              exercitationem.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Characters;
