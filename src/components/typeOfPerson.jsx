import React from "react";
import { Link } from "react-router-dom";

import "./typeOfPerson.css";
import FullFamily from "../assets/images/fullfamily.png";
import MySelf from "../assets/images/myself.png";
import MeSpouse from "../assets/images/mespouse.png";
import MeSpouseChild from "../assets/images/mespousechild.png";
import Parents from "../assets/images/parents.png";

function typeOfPerson() {
  const handlePicture = (id) => {
    const element = document.getElementById(id);
    if ((element.style.opacity === "1") | (element.style.opacity === "")) {
      element.style.opacity = "0.5";
    } else {
      element.style.opacity = "1";
    }
    let members = [];
    switch (id) {
      case 1:
        members = ["Myself"];
        break;
      case 2:
        members = ["Myself", "Spouse"];
        break;
      case 3:
        members = ["Myself", "Spouse", "Child1"];
        break;
      case 4:
        members = ["Myself", "Spouse", "Child1", "Child2"];
        break;
      case 5:
        members = ["Parents"];
        break;
      default:
        break;
    }
    let loginInfo = localStorage.getItem("login");
    loginInfo = { ...loginInfo, members };
    localStorage.setItem("login", JSON.stringify(loginInfo));
  };
  return (
    <div className="container">
      <h3 className="main-heading-profile">Who do you want insurance for?</h3>
      <div className="row">
        <div className="col-12">
          <div className="box-wrapper">
            <div className="profile-div" id="1">
              <div className="box" onClick={() => handlePicture(1)}>
                <img src={MySelf} alt="img" />
              </div>
              <h5>Myself</h5>
            </div>
            <div className="profile-div" id="2">
              <div className="box" onClick={() => handlePicture(2)}>
                <img src={MeSpouse} alt="img" />
              </div>
              <h5>Me + Spouse</h5>
            </div>
            <div className="profile-div" id="3">
              <div className="box" onClick={() => handlePicture(3)}>
                <img src={MeSpouseChild} alt="img" />
              </div>
              <h5>Me + Spouse + 1 child</h5>
            </div>
            <div className="profile-div" id="4">
              <div className="box" onClick={() => handlePicture(4)}>
                <img src={FullFamily} alt="img" />
              </div>
              <h5>Me + Spouse + 2 child</h5>
            </div>
            <div className="profile-div" id="5">
              <div className="box" onClick={() => handlePicture(5)}>
                <img src={Parents} alt="img" />
              </div>
              <h5>Parents</h5>
            </div>
          </div>
        </div>
        <div className="button-main-div">
          <Link className="btn btn-white" to="/dashboard">
            submit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default typeOfPerson;
