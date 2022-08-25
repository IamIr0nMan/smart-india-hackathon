import React from "react";
import { Link } from "react-router-dom";
import "./InsuranceType.css";

import Products from "./products";

function clickMe() {
  alert("You clicked me!");
}

export default function InsuranceType(props) {
  return (
    <>
      <div className="heading_style">Select the insurance type </div>
      <div className="App">
        {props.contents.map((content) => (
          <Products
            key={content.id}
            image={content.image}
            name={content.name}
          />
        ))}
      </div>
      <div className="ps-4">
        <Link className="btn btn-outline-white " to="/chooseperson">
          Next
        </Link>
      </div>
    </>
  );
}
