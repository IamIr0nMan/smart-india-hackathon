import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar(props) {
  return (
    <nav className={"navbar " + props.navbarStyle}>
      <div className="container-fluid">
        <Link className="navbar-brand nav-brand-name" to="/">
          Aarogya Care
        </Link>
        <Link
          className={"btn btn-outline-purple " + props.buttonStyle}
          to="/signup"
        >
          Register Now
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
