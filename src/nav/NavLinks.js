import React from "react";
import { Link } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    <div className="nav-links">
      <ul className="nav-links__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
