import React from "react";

import "./dashboard.css";
import MainDashboard from "../assets/images/main_dashboard.png";
import SplitPageComponent from "../components/splitPageComponent";
import QuizSection from "../components/quiz_section";

function main_dashboard() {
  return (
    <div>
      <SplitPageComponent
        leftSideComponent={
          <img
            src={MainDashboard}
            alt="mascot"
            className="main_dashboard_img"
          />
        }
        rightSideComponent={
          <QuizSection
            question="What is health insurance?"
            options={["a", "b", "c"]}
          />
        }
      />
    </div>
  );
}

export default main_dashboard;
