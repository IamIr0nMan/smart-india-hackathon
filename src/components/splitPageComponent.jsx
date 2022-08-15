import React from "react";

import "./splitPageComponent.css";

function SplitPageComponent(props) {
  return (
    <div className="row g-0">
      <div className="col-md-6 g-0">
        <div className="leftside d-flex justify-content-center align-items-center">
          {props.leftSideComponent}
        </div>
      </div>
      <div className="col-md-6 g-0 right">
        <div className="rightside d-flex justify-content-center align-items-center">
          <div className="inside-component">{props.rightSideComponent}</div>
        </div>
        <div className="animated-area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SplitPageComponent;
