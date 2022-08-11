import React from "react";

import "./featuresComponent.css";

function FeaturesComponent(props) {
  return (
    <div className="col">
      <img src={props.image} alt={props.altText} />
      <p className="main-txt mt-3">{props.heading}</p>
      <p className="sub-txt">{props.body}</p>
    </div>
  );
}

export default FeaturesComponent;
