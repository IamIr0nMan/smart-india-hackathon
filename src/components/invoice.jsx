import React from "react";

import AddMembers from "./addMembers";
import PaymentMode from "./paymentMode";

class Invoice extends React.Component {
  state = { step: 1 };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  render() {
    if (this.state.step === 1) {
      return <PaymentMode handleSubmit={this.nextStep} />;
    } else {
      const { members } = localStorage.getItem("login");
      console.log(members);
      return <AddMembers handleClick={this.prevStep} person={members} />;
    }
  }
}

export default Invoice;
