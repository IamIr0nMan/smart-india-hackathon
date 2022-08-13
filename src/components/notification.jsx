import React from "react";
import NotificationBar from "./NotificationBar";
import "./notification.css";

function notification() {
  return (
    <>
      <div className="card container">
        <div class="notification-modal">
          <ul class="list-group list-group-flush">
            <div className="d-flex justify-content-between notification-header align-items-center">
              <h4>Notifications</h4>
              <h6>
                <a href="/">Mark all as Read</a>
              </h6>
            </div>
          </ul>
          <ul class="list-group list-group-flush none">
            <li class="list-group-item notification"></li>
            <NotificationBar />
            <NotificationBar />
            <NotificationBar />
          </ul>
        </div>
      </div>
    </>
  );
}

export default notification;
