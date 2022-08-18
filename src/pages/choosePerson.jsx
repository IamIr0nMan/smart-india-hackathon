import React from "react";

import Navbar from "../components/navbar";
import SplitPageComponent from "../components/splitPageComponent";
import TypeOfPerson from "../components/typeOfPerson";

import LeftInfo from "../assets/images/Insurance-rafiki.png";

function choosePerson() {
  return (
    <div>
      <Navbar
        buttonStyle="invisible"
        navbarStyle="transparent pos-absolute ms-5"
      />
      <SplitPageComponent
        leftSideComponent={<img src={LeftInfo} alt="" />}
        rightSideComponent={<TypeOfPerson />}
      />
    </div>
  );
}

export default choosePerson;
