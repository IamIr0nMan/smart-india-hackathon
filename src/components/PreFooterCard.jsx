import React from "react";
import { Link } from "react-router-dom";

function PreFooterCard(props) {
  return (
    <>
      <div className="card col-sm-4 mx-5">
        <div className="card-body">
          <h5 className="card-title card-title-changes">{props.heading}</h5>
          <p className="card-text-main">{props.description}</p>
          <div className="validity-section d-flex justify-content-between">
            <p>Validity : 1 year</p>
            <Link className="btn btn-primary" to="/signup">
              Buy now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreFooterCard;
