import React from "react";
import { Link } from "react-router-dom";

import "./signUpForm.css";

function SignUpForm() {
  const initialValues = { name: "", age: "", mobile: "" };
  const [formValues, setFormValues] = React.useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = () => {
    localStorage.setItem("login", JSON.stringify(formValues));
  };

  return (
    <div className="card custom-card">
      <div className="card-body">
        <div>
          <div className="mb-3 card-title">
            <h5 className="form-title">
              Let's get you an insurance to make you and your family covered
            </h5>
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupName"
              name="name"
              onChange={handleChange}
              value={formValues.name}
              placeholder="Enter name"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupAge" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="formGroupAge"
              name="age"
              onChange={handleChange}
              value={formValues.age}
              placeholder="Enter age"
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupMobile" className="form-label">
              Mobile Number
            </label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                +91
              </span>
              <input
                type="number"
                className="form-control"
                id="formGroupMobile"
                name="mobile"
                onChange={handleChange}
                value={formValues.mobile}
                placeholder="Enter mobile number"
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="privacyCheck"
              required
            />
            <label className="form-check-label" htmlFor="privacyCheck">
              I agree with the{" "}
              <Link className="privacy-link" to="/">
                Privacy Policy
              </Link>
            </label>
          </div>
          <div>
            <Link
              className="btn btn-purple"
              type="button"
              onClick={onSubmit}
              to="/"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
