import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="mr-10">
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
      </div>
      <div>
        <Link to={"/addNewBook"} className="hover:underline">
          Book Form
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
