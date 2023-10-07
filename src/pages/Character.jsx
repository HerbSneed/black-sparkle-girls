import React from "react";
import Catrina from "../assets/Catrina.heic";
import Daijah from "../assets/Daijah.heic";
import Jade from "../assets/Jade.heic";
import Mariah from "../assets/Mariah.heic";


function Characters() {
  return (
    <ul className="flex items-center justfiy-center">
      <li>
        <img src={Catrina}></img>
      </li>

      <li>
        <img src={Daijah}></img>
      </li>

      <li>
        <img src={Jade}></img>
      </li>

      <li>
        <img src={Mariah}></img>
      </li>
    </ul>
  );};

export default Characters;
