// Main.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout"; // Layout containing Navbar and Outlet
import App from "./App"; // Home page
import AboutUs from "./aboutus"; // About Us page
import Agents from "./agents"; // Agents page
import Services from "./services"; // Services page
import Login from "./login"; // Login page
import ContactUs from "./contactus"; // Contact Us page
import SignUp from "./signup"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout as the wrapper
    children: [
      { path: "/", element: <App /> }, // Main page route
      { path: "aboutus", element: <AboutUs /> }, // About Us route
      { path: "agents", element: <Agents /> }, // Agents route
      { path: "services", element: <Services /> }, // Services route
      { path: "login", element: <Login /> }, // Login route
      { path: "contactus", element: <ContactUs /> }, // Contact Us route
      { path: "signup" , element: <SignUp /> }, // Sign Up route

      
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;