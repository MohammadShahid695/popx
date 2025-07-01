import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center text-black max-w-lg w-full">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
          Welcome to PopX
        </h1>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Create Account Button */}
          <Link
            to="/signup"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Create Account
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="border-2 border-black text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition duration-300"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
