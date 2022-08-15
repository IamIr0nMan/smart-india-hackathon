import React from "react";

function PreFooterCard() {
  return (
    <>
      <div class="card col-sm-4 mx-5">
        <div class="card-body">
          <h5 class="card-title card-title-changes">Special title treatment</h5>
          <p class="card-text-main">
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not on60s
            with the release tly with desktop publishing software like Aldus
            PageMaker includi
          </p>
          <div className="validity-section d-flex justify-content-between">
            <p>Validity : 1 year</p>
            <button type="button" class="btn btn-primary">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreFooterCard;
