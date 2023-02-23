import React from "react";
import "./Section3.css";
import Cam from "./images/CameraMan.png";
import { FaRegLightbulb } from "react-icons/fa";
import { TbCrosshair } from "react-icons/tb";
import { TbCircles } from "react-icons/tb";

const Section3 = () => {
  return (
    <>
      <div className="Section-3">
        <div className="Section-3-Photo">
        <img src={Cam} alt="" />
        </div>
        <div>
          <h3>GET CONNECTED</h3>
          <h2>Share your memories with your travel buddys</h2>
          <div className=" Second-Text">
            <div className="Second-Text-Flex">
            <div className="Second-icon">
              <TbCrosshair className="Icon-1" />
            </div>
            <div className="Second-text">
              <h4>Sign Up</h4>
              <p>
              make an account and login to keep yourself updated into travellers
              platform.
            </p>
            </div>
           
          </div>
          <div className=" Second-Text">
            <div className="Second-Text-Flex">
            <div className="Second-icon">
              <FaRegLightbulb className="Icon-1" />
            </div>
            <div className="Second-text">
              <h4>Create Events</h4>
              <p>
              make an account and login to keep yourself updated into travellers
              platform.
            </p>
            </div>
            </div>
          </div>
          <div className=" Second-Text">
            <div className="Second-Text-Flex">
            <div className="Second-icon">
              <TbCircles className="Icon-1" />
            </div>
            <div className="Second-text">
              <h4>Share Memories</h4>
              <p>
              make an account and login to keep yourself updated into travellers
              platform.
            </p>
            </div>
            </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Section3;
