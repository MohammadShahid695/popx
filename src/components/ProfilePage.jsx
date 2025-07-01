import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa"; // Plus icon for changing profile picture

const ProfilePage = () => {
  const location = useLocation();
  const { user } = location.state || {}; // Retrieve user data passed from SignUp form

  const [profilePic, setProfilePic] = useState(user?.profilePic || ""); // Store and set the profile picture
  const [showOptions, setShowOptions] = useState(false); // State to toggle the options menu

  // Handle profile picture change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Set the new profile picture
        setShowOptions(false); // Close the menu after selecting
      };
      reader.readAsDataURL(file); // Convert the image to base64
    }
  };

  // Toggle menu visibility when profile picture is clicked
  const toggleMenu = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96 text-center">
        {/* Profile Picture */}
        <div className="relative mb-4">
          <img
            src={profilePic || "https://via.placeholder.com/150?text=User+Icon"} // Fallback if no profile picture
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4 mx-auto cursor-pointer"
            onClick={toggleMenu} // Show the menu when clicked
          />
          {/* Options menu (Add or Update Profile) */}
          {showOptions && (
            <div className="absolute top-0 right-0 bg-white shadow-lg p-2 rounded-lg mt-10 w-40 text-sm">
              <label
                htmlFor="profilePicInput"
                className="block text-gray-700 cursor-pointer"
              >
                {profilePic ? "Update Profile" : "Add Profile"}
              </label>
              <input
                type="file"
                id="profilePicInput"
                accept="image/*"
                onChange={handleProfilePicChange}
                className="hidden"
              />
            </div>
          )}
        </div>

        {/* User Name */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {user?.fullName}
        </h3>

        {/* User Email */}
        <p className="text-gray-600 mb-4 break-words">{user?.email}</p>

        {/* Bio Section (optional) */}
        <div>
          <h4 className="text-lg font-medium text-gray-800">Bio:</h4>
          <p className="text-gray-700">{user?.bio || "No bio available."}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
