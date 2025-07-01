import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: false,
  });

  // Update state on input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // You can process the signup here
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-center text-black mb-6">
          Create your PopX account
        </h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-lg font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-lg font-medium text-black"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Company Name Field */}
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-lg font-medium text-black"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your company name"
            />
          </div>

          {/* Are you an Agency Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="isAgency"
              name="isAgency"
              checked={formData.isAgency}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="isAgency" className="text-lg text-black">
              Are you an Agency?
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Already have an account Link */}
        <div className="text-center mt-5">
          <p className="text-sm text-black">
            Already have an account?{" "}
            <a href="/login" className="text-purple-600 hover:text-purple-800">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
