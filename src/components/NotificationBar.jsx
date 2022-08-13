import React from "react";
import "./notification.css";
import Profile from "../assets/images/checkup.png";
function NotificationBar() {
  return (
    <>
      <li class="list-group-item mb-0">
        <div className="row p-1">
          <div className="col-md-2 image-div">
            <img
              src={Profile}
              className="img-fluid message-image"
              alt="Profile"
            />
          </div>
          <div className="message col-md-10 align-items-center justify-content-between">
            <div className="d-flex justify-content-between timer align-items-center">
              <h6>Nelly Miller</h6>
              <p>2 min ago</p>
            </div>
            <p>You have Earned new points</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default NotificationBar;
