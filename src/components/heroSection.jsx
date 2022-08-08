import React from "react";
import Pose from "../assets/images/pose_1.png";
import "./heroSection.css";

function HeroSection() {
  return (
    <div className="container">
      <div className="row justify-content-around row-cols-2">
        <div className="p-2 col mt-5 p-5 hero-txt">
          <p className="heading">
            Great health is assured with amazing Health Insurance Plan
          </p>
          <br />
          <p className="sub-txt">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
          <br />
          <button className="btn btn-purple">Get Started</button>
        </div>
        <div className="p-2 col">
          <img
            className="hero-img"
            src={Pose}
            alt="Doctor sitting on a chair."
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
