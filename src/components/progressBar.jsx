import React from "react";

import "./progressBar.css";

function ProgressBar(props) {
  return (
    <div className="progress m-3">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: props.width }}
      ></div>
    </div>
  );
}

export default ProgressBar;
