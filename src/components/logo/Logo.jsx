import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";
function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logo} className="w-28 h-28 mx-auto" />
      </Link>
    </div>
  );
}

export default Logo;
