import React from "react";
import "./typeOfPerson.css";
import FullFamily from "../assets/images/fullfamily.png";
import MySelf from "../assets/images/myself.png";
import MeSpouse from "../assets/images/mespouse.png";
import MeSpouseChild from "../assets/images/mespousechild.png";
import Parents from "../assets/images/parents.png";

function typeOfPerson() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
  };
  const handlePicture = (e) => {
    console.log("Picture is been selected");
    const element = document.querySelector(".profile-div");
    if (element.style.opacity === "1") {
      element.style.opacity = "0.5";
    } else {
      element.style.opacity = "1";
    }
  };
  return (
    <div className="container">
      <h3 className="main-heading-profile">Who do you want insurance for ?</h3>
      <div className="row">
        <div className="col-12">
          <div className="box-wrapper">
            <div className="profile-div">
              <div className="box" onClick={handlePicture}>
                <img src={MySelf} alt="img" />
              </div>
              <h5>Myself</h5>
            </div>
            <div className="profile-div">
              <div className="box" onClick={handlePicture}>
                <img src={MeSpouse} alt="img" />
              </div>
              <h5>Me + Spouse</h5>
            </div>
            <div className="profile-div">
              <div className="box" onClick={handlePicture}>
                <img src={MeSpouseChild} alt="img" />
              </div>
              <h5>Me + Spouse + 1 child</h5>
            </div>
            <div className="profile-div">
              <div className="box" onClick={handlePicture}>
                <img src={FullFamily} alt="img" />
              </div>
              <h5>Me + Spouse + 2 child</h5>
            </div>
            <div className="profile-div">
              <div className="box" onClick={handlePicture}>
                <img src={Parents} alt="img" />
              </div>
              <h5>Parents</h5>
            </div>
          </div>
        </div>
        <div className="button-main-div">
          <button
            type="button"
            className="button-next btn"
            onClick={handleClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default typeOfPerson;
