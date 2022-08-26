import React from "react";
import { Link } from "react-router-dom";

import "./quiz_window.css";
import data from "../assets/data.js";
import QuizComponent from "../components/dashboard_answer";

function quiz_section(props) {
  const handleClickSkip = (e) => {};
  const buttonHandler = (e) => {
    e.preventDefault();
    e.target.value = <QuizComponent mainAnswer={data} />;
  };
  return (
    <div className="card">
      <div className="card-header d-flex align-item-center justify-content-between">
        <div>Answer the following Question to earn reward</div>
        <div
          className="heading-skip d-flex align-item-center text-align-center"
          onClick={handleClickSkip}
        >
          <Link className="link-decoration" to="/invoice">
            {" "}
            Skip {`->`}
          </Link>
        </div>
      </div>
      <div className="card-body">
        <div className="card-title">{props.question}</div>
        <p className="card-text">
          <ul className="list-group">
            <button
              type="submit"
              className="btn btn-secondary list-group-item list-options"
              onClick={buttonHandler}
            >
              the best type of health insurance you can buy
            </button>
            <button
              type="submit"
              className="btn btn-secondary list-group-item list-options"
              onClick={buttonHandler}
            >
              the amount of health insurance company charge each month for
              coverage
            </button>

            <button
              type="submit"
              className="btn btn-secondary list-group-item list-options"
              onClick={buttonHandler}
            >
              a bonus you get at the end of year if you stay covered
            </button>

            <button
              type="submit"
              className="btn btn-secondary list-group-item list-options"
              onClick={buttonHandler}
            >
              don't know
            </button>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default quiz_section;
