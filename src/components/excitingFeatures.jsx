import React from "react";

import App from "../assets/images/app.png";
import Cashless from "../assets/images/cashless.png";
import Checkup from "../assets/images/checkup.png";
import Tests from "../assets/images/tests.png";

import "./excitingFeatures.css";
import FeaturesComponent from "./featuresComponent";

function ExcitingFeaturesSection() {
  return (
    <div className="container exciting-features-container">
      <h4 className="heading">Meet exciting feature of Health Insurance</h4>
      <div className="row row-cols-4 mt-5 pt-5">
        <FeaturesComponent
          image={Cashless}
          altText="Cashless Payments"
          heading="Cashless Treatment"
          body="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeaturesComponent
          image={Checkup}
          altText="Medical Checkups"
          heading="Medical Checkups"
          body="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeaturesComponent
          image={App}
          altText="Health App"
          heading="Dedicated Health App"
          body="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
        <FeaturesComponent
          image={Tests}
          altText="Reimbursement of tests"
          heading="Reimbursement of different tests"
          body="Get your blood tests delivered at home collect a sample from the your blood tests."
        />
      </div>
    </div>
  );
}

export default ExcitingFeaturesSection;
