import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="py-4 px-3 absolute top-0 z-10 w-full">
      <Link to="/">
        <img
          src={logo}
          className="cursor-pointer"
          width="140"
          height="43"
          alt="logo"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
