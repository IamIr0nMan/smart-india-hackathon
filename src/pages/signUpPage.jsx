import React from "react";

import Navbar from "../components/navbar";
import SplitPageComponent from "../components/splitPageComponent";
import SignUpForm from "../components/signUpForm";

import LeftInfo from "../assets/images/insurance-amico.png";

function SignUpPage() {
  return (
    <div>
      <Navbar
        buttonStyle="invisible"
        navbarStyle="transparent pos-absolute ms-5"
      />
      <SplitPageComponent
        leftSideComponent={<img src={LeftInfo} />}
        rightSideComponent={<SignUpForm />}
      />
    </div>
  );
}

export default SignUpPage;
