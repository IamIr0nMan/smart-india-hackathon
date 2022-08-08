import React from "react";

import App from "../assets/images/app.png";
import Cashless from "../assets/images/cashless.png";
import Checkup from "../assets/images/checkup.png";
import Tests from "../assets/images/tests.png";

import "./excitingFeatures.css";

function ExcitingFeaturesSection() {
  return (
    <div className="container">
      <h4 className="heading">Meet exciting feature of Health Insurance</h4>
      <div className="row row-cols-4 mt-5 pt-5">
        <div className="col">
          <img src={Cashless} alt="Cashless Payments" />
          <p className="main-txt mt-3">Cashless Treatment</p>
          <p className="sub-txt">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
        <div className="col">
          <img src={Checkup} alt="Medical Checkups" />
          <p className="main-txt mt-3">Medical CheckUps</p>
          <p className="sub-txt">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
        <div className="col">
          <img src={App} alt="Health App" />
          <p className="main-txt mt-3"> Dedicated Health App </p>
          <p className="sub-txt">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
        <div className="col">
          <img src={Tests} alt="Reimbursement of tests" />
          <p className="main-txt mt-3"> Reimbursement of different tests </p>
          <p className="sub-txt">
            Get your blood tests delivered at home collect a sample from the
            your blood tests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExcitingFeaturesSection;
