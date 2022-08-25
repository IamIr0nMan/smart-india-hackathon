import React from "react";
import "./PreFooter.css";
import Pose from "../assets/images/doctor.png";
import Footercard from "../assets/images/Footer_Card.png";
import PreFooterCard from "./PreFooterCard";
function PreFooter() {
  return (
    <>
      <div className="header">
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h6 className="display-4 left-heading">
                Free Customer Support to Ensure What you Like to expect
              </h6>
              <p className="main-hero-para">
                We offer a risk-free trial period of upto two weeks. You will
                only have to pay if you are happy with the developer and wish to
                continue. if you are unsatisfied, we'll refund payments or fix
                issues on our dime period customers.
              </p>
              <p className="main-hero-para-small">
                If you are happy with the developer and wish to continue.If you
                are unsatisfied, we 'll refund payments or fix issues.
              </p>
            </div>

            {/*  --------------- main header right side--------------  */}

            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img src={Pose} alt="doctor-sab" className="img-fluid" />
            </div>
          </div>
        </section>
      </div>
      {/* Second Portion of the PreFooter  */}
      <div className="row second-main-hero-container">
        <h4>Recommended Health Insurances</h4>
        <div className="check d-flex justify-content-center">
          <PreFooterCard />
          <PreFooterCard />
          <PreFooterCard />
        </div>
      </div>
      {/* This is part will contain the Support for the new ticket. */}
      <div className="contact">
        <img
          src={Footercard}
          alt="PreFooterCardLogo"
          className="contact-insider"
        />
        <div className="card-button">
          <button type="button" className="contact-button btn btn-primary">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default PreFooter;
