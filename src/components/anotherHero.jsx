import React from "react";

import Doctor from "../assets/images/pose_7.png";
import "./anotherHero.css";

function AnotherHero() {
  return (
    <div className="container">
      <div className="row justify-content-around row-cols-2">
        <div className="p-2 col">
          <img src={Doctor} alt="Doctor jumping" />
        </div>
        <div className="p-2 col mt-5 p-5">
          <p className="anotherHero-heading my-4 pt-5">
            Boost your health by choosing Health Insurance
          </p>
          <p className="py-3">
            Create custom landing pages with Shades that convert more visitors
            than any website, no coding required.
          </p>
          <ul className="ul-bullet-points">
            <li className="li-bullet-points">Preventive Health CheckUps</li>
            <li className="li-bullet-points">Avail 100% Cashback</li>
            <li className="li-bullet-points">Enjoy Membership Discount</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AnotherHero;
