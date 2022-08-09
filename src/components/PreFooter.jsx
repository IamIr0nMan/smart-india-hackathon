import React from "react";
import "./PreFooter.css";
import Pose from "../assets/images/doctor.png";
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
      <div class="row second-main-hero-container">
        {/* <div className="second-section-heading"> */}
        <h4>Recommended Health Insurances</h4>
        {/* </div> */}
        <div className="check d-flex justify-content-center">
          <div class="card col-sm-4 mx-5">
            <div class="">
              <div class="card-body">
                <h5 class="card-title card-title-changes">
                  Special title treatment
                </h5>
                <p class="card-text-main">
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not on60s with the release tly with desktop publishing
                  software like Aldus PageMaker includi
                </p>
                <div className="validity-section d-flex justify-content-between">
                  <p>Validity : 1 year</p>
                  <button type="button" class="btn btn-primary">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-sm-4 mx-5 col-sm-4">
            <div class="">
              <div class="card-body">
                <h5 class="card-title card-title-changes">
                  Special title treatment
                </h5>
                <p class="card-text-main">
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only fivare like Aldus PageMaker includi
                </p>
                <div className="validity-section d-flex justify-content-between">
                  <p>Validity : 1 year</p>
                  <button type="button" class="btn btn-primary">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card col-sm-4 mx-5">
            <div class="">
              <div class="card-body">
                <h5 class="card-title card-title-changes">
                  Special title treatment
                </h5>
                <p class="card-text-main">
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it 0s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker includi
                </p>
                <div className="validity-section d-flex justify-content-between">
                  <p>Validity : 1 year</p>
                  <button type="button" class="btn btn-primary">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This is part will contain the Support for the new ticket. */}
      <div className="contact">
        <div className="contact-insider circular d-flex justify-content-between">
          <p>Have any question ? Here is your help!</p>
          <button type="button" className="contact-button btn btn-primary">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default PreFooter;
