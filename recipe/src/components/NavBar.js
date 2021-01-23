import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full h-20 bg-gray-100 bg-opacity-75 shadow-2xl">
      <div className="flex items-center justify-around h-20 max-w-6xl mx-auto">
        <Link to="/">
          <button className="px-8 py-2 text-2xl font-semibold uppercase bg-gray-100 border-2 focus:outline-none hover:text-gray-100 hover:bg-gray-900 hover:border-gray-100">
            Home
          </button>
        </Link>
        <Link to="/recipe">
          <button className="px-8 py-2 text-2xl font-semibold uppercase bg-gray-100 border-2 focus:outline-none hover:text-gray-100 hover:bg-gray-900 hover:border-gray-100">
            Recipes
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
