import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar(props) {
  return (
    <nav className={"navbar " + props.navbarStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand nav-brand-name" to="#">
          Aarogya Care
        </Link>
        <button className={"btn btn-outline-purple " + props.buttonStyle}>
          Register Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
