import React from "react";
import { Link } from "react-router-dom";

function PreFooterCard() {
  return (
    <>
      <div className="card col-sm-4 mx-5">
        <div className="card-body">
          <h5 className="card-title card-title-changes">
            Special title treatment
          </h5>
          <p className="card-text-main">
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not on60s
            with the release tly with desktop publishing software like Aldus
            PageMaker includi
          </p>
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
