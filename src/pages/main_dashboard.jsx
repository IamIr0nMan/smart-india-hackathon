import React from "react";

import "./dashboard.css";
import Main_dashboard from "../assets/images/main_dashboard.png";
import SplitPageComponent from "../components/split_pageComponent_main_dashboard";
import Quiz_section from "../components/quiz_section";

function main_dashboard() {
  return (
    <div>
      <SplitPageComponent
        leftSideComponent={
          <img
            src={Main_dashboard}
            alt="image"
            className="main_dashboard_img"
          />
        }
        rightSideComponent={
          <Quiz_section
            question="What is health insurance?"
            options={["a", "b", "c"]}
          />
        }
      />
    </div>
  );
}

export default main_dashboard;
