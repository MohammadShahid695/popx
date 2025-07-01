import React from "react";
import { Link } from "react-router-dom";

const AccountSettings = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full sm:w-96">
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-purple-500"
          />
        </div>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-3">
          Marry Doe
        </h2>
        <p className="text-center text-gray-600 mb-5">MarryDoe@gmail.com</p>

        <p className="text-lg text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
          nonumy eirmod tempor incididunt ut labore et dolore magna aliquyam
          erat, sed diam.
        </p>

        <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg hover:from-indigo-600 hover:to-purple-500 transition duration-300">
          Edit Profile
        </button>

        <div className="text-center mt-5">
          <p className="text-sm text-gray-600">
            Want to go back?{" "}
            <Link to="/" className="text-purple-600 hover:text-purple-800">
              Go to SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
