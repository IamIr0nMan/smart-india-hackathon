import React from "react";

import "./paymentMode.css";

function PaymentMode(props) {
  return (
    <div className="card payment-custom-card">
      <div className="card-body">
        <h5 className="card-title invoice-text py-2">
          Hey congrats! You are just one step away from getting insured.
        </h5>
        <h6 className="invoice-text py-2">Select payment mode</h6>
        <div className="form-check py-2">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            id="emi"
          />
          <label htmlFor="emi" className="form-check-label">
            EMI
          </label>
        </div>
        <div className="form-check py-2">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            id="upi"
          />
          <label htmlFor="upi" className="form-check-label">
            UPI{" "}
            <span className="badge rounded-pill text-bg-light">
              Recommended
            </span>
          </label>
        </div>
        <div className="form-check py-2">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            id="net-banking"
          />
          <label htmlFor="net-banking" className="form-check-label">
            Net Banking
          </label>
        </div>
        <div className="form-check py-2">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            id="credit-card"
          />
          <label htmlFor="credit-card" className="form-check-label">
            Credit/Debit Card
          </label>
        </div>
        <button className="btn btn-purple my-3" onClick={props.handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PaymentMode;
