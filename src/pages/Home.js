import React from "react";
import { Navbar } from "../components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Navbar />
      <div className="text-center">
        <h1 className="text-3xl font-bold uppercase">Home</h1>
        <div className="space-x-2 my-4">
          <Link className="text-gray-100" to="/signin">
            <button className="bg-blue-800 px-3 py-1 focus:outline-none">
              Sign in
            </button>
          </Link>

          <Link className="text-gray-100" to="/signup">
            <button className="bg-blue-800 px-3 py-1 focus:outline-none">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
