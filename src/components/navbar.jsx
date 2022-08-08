import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand nav-brand-name" to="#">
          Aarogya Care
        </Link>
        <button className="btn btn-outline-purple">Register Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
