import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import food from "../resources/images/food.jpg";

function Home() {
  return (
    <div
      className="flex items-center justify-center w-full h-screen "
      style={{ backgroundImage: `url(${food})` }}
    >
      <div className="flex flex-col items-center justify-center w-full h-96">
        <Zoom left cascade>
          <p className="my-4 tracking-wider text-gray-100 bg-gray-400 bg-opacity-10 text-9xl">
            WELCOME
          </p>
          <Link to="/recipe">
            <button className="px-10 py-4 font-semibold text-gray-100 uppercase border shadow-inner rounded-2xl focus:outline-none hover:text-gray-100 hover:bg-gray-900 hover:border-gray-100">
              Click for some Recipes
            </button>
          </Link>
        </Zoom>
      </div>
    </div>
  );
}

export default Home;
