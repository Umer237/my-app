import React from "react";
import "./Section5.css";
import { TiTick } from "react-icons/ti";

const Section5 = () => {
  return (
    <>
      <div className="Section-5-Text">
        <h2>PRICING TABLE</h2>
        <h1>Choose the plan that,s right for you</h1>
      </div>
      <div className="Section-5-Background">
      <div className="Board-Flex-Text">
        <div className="Board-1">
          <h1>$29 /month</h1>
          <h2>Standard</h2>
          <p>All the basics for businesses that are just getting started.</p>
          <div className="Board-1-Things">
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Organize your travel plans</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Finds places near hotel</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Tallies & displays travel stats </h3>
          </div>
          </div>
          <button className="btn">Get Started</button>
        </div>
        <div className="Board-2">
          <h1>$99 /month</h1>
          <h2>Essentials</h2>
          <p>Advanced features for travelling that are needed.</p>
          <div className="Board-2-Things">
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Track reward programs</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Find places near hotel</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Find alternative flights</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Shows transportation option</h3>
          </div>
          </div>
          <button className="btn">Get Started</button>
        </div>
        <div className="Board-3">
          <h1>$129 /month</h1>
          <h2>Premium</h2>
          <p>Advanced features for pros who need more customization.</p>
          <div className="Board-3-Things">
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Country-specific travel info</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Finds better hotels</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Shoes security wait items</h3>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <TiTick className="Icon-2" />
            </div>
            <h3>Tracks reward programs</h3>
          </div>
          </div>
          <button className="btn">Get Started</button>
          
        </div>
      </div>
      </div>      
    </>
  );
};

export default Section5;
