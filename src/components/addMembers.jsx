import React from "react";
import Member from "./member";

function AddMembers(props) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="invoice-text" onClick={props.handleClick}>
          &#8592; back
        </p>
        <h5 className="invoice-text">Who will be covered?</h5>
        <p className="invoice-text">(Add details of the members)</p>
        <h5 className="invoice-text">Members</h5>
        {props.members.map((member) => (
          <Member person={member} />
        ))}
      </div>
    </div>
  );
}

export default AddMembers;
