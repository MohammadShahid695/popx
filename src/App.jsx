import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login"; // Import the sign-in page
import SignUp from "./components/SignUp"; // Import the sign-up page
import LandingPage from "./components/LandingPage"; // Import the LandingPage
import ProfilePage from "./components/ProfilePage"; // Import ProfilePage to show user profile after signup

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to the Landing Page (default page when visiting '/') */}
        <Route path="/" element={<LandingPage />} />
        {/* Route for the Login page */}
        <Route path="/login" element={<Login />} />
        {/* Route for the Sign Up page */}
        <Route path="/signup" element={<SignUp />} />{" "}
        {/* Changed path to lowercase "/signup" */}
        {/* Route for the Profile Page (after user completes signup) */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
