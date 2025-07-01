import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null); // State to store user data after login

  const navigate = useNavigate(); // Hook to navigate between pages

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sample login logic: Check if email and password are correct
    if (
      formData.email === "user@example.com" &&
      formData.password === "password123"
    ) {
      const loggedInUser = { name: "John Doe", email: formData.email };
      setUser(loggedInUser); // Set user data after successful login

      // Navigate to profile page and pass user data as state
      navigate("/profile", { state: { user: loggedInUser } });
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="bg-white p-10 rounded-lg shadow-xl w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-center text-black mb-6">
          Sign in to your PopX account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Please enter your details to sign in.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Address */}
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="email"
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
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              className="block text-lg font-medium text-gray-700"
              htmlFor="password"
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
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-4">
            <a
              href="/forgot-password"
              className="text-sm text-purple-600 hover:text-purple-800"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-5">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-purple-600 hover:text-purple-800">
              Create an account
            </a>
          </p>
        </div>

        {/* Profile Display (Only if logged in) */}
        {user && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800">
              Welcome, {user.name}!
            </h3>
            <p className="text-gray-600">{user.email}</p>
            <button
              onClick={() => navigate("/profile", { state: { user } })}
              className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Go to Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
