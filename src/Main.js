// Main.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout"; // Layout containing Navbar and Outlet
import App from "./App"; // Home page
import AboutUs from "./aboutus"; // About Us page
import Agents from "./agents"; // Agents page
import Services from "./services"; // Services page
import PropertyListing from "./listings"; // Property Listings page
import Login from "./login"; // Login page
import ContactUs from "./contactus"; // Contact Us page
import SignUp from "./signup"
import S from "./sell";
import R from "./rent_properties";
import F from "./filter";
import RPF from "./filter_rent_properties";
import M_rent from "./filter_map_rent";
import Sell_prop from "./sell_properties";
import SPF from "./filter_sale_properties";
import M_sale from "./fileter_map_sale";
import Sell_commercial_plots from "./sell_commercial_plots";
import Sell_commercial_plots_filter from "./filter_sale_commercial_plots";
import M_sale_commercial_plots from "./filter_map_sale_commercial_plots";
import Rent_commercial_plots from "./rent_commercial_plots";
import Rent_commercial_plots_filter from "./filter_rent_commercial_plots";
import M_rent_commercial_plots from "./filter_map_rent_commercial_plots";
import Rent_residential_plots from "./rent_residential_plots";
import Rent_residential_plots_filter from "./filter_rent_residential_plots";
import M_rent_residential_plots from "./filter_map_rent_residential_plots";
import Sale_residential_plots from "./sell_residential_plots";
import Sale_residential_plots_filter from "./filter_sale_residential_plots";
import M_sale_residential_plots from "./filter_map_sale_residential_plots";
import Sell_commercial_workspace from "./sell_commercial_workspace";
import Sale_commercial_workspace_filter from "./filter_sale_commercial_workspace";
import M_sale_commercial_workspace from "./filter_map_sale_commercial_workspace";
import Rent_commercial_workspace from "./rent_commercial_workspace";
import Rent_commercial_workspace_filter from "./filter_rent_commercial_workspace";
import M_rent_commercial_workspace from "./filter_map_rent_commercial_workspace";
import Residential_projects from "./residential_project";
import Residential_projects_filter from "./filter_residential_projects";
import M_residential_projects_filter from "./filter_map_residential_projects";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout as the wrapper
    children: [
      { path: "/", element: <App /> }, // Main page route
      { path: "aboutus", element: <AboutUs /> }, // About Us route
      { path: "agents", element: <Agents /> }, // Agents route
      { path: "services", element: <Services /> }, // Services route
      { path: "PropertyListing", element: <PropertyListing /> }, // Property Listing route
      { path: "login", element: <Login /> }, // Login route
      { path: "contactus", element: <ContactUs /> }, // Contact Us route
      { path: "signup" , element: <SignUp /> }, // Sign Up route
      {path: "sell" , element: <S />},
      {path: "rent" , element: <R />},
      {path: "filter" , element: <F />},
      {path: "rpf" , element: <RPF />},
      {path: "map_rent" , element: <M_rent />},
      {path: "sell_p" , element: <Sell_prop />},
      {path: "spf" , element: <SPF />},
      {path: "map_sale" , element: <M_sale />},
      {path: "sell_commercial_plots" , element: <Sell_commercial_plots />},
      {path: "sell_commercial_plots_filter" , element: <Sell_commercial_plots_filter />},
      {path: "map_sale_commercial_plots" , element: <M_sale_commercial_plots />},
      {path: "rent_commercial_plots" , element: <Rent_commercial_plots />},
      {path: "rent_commercial_plots_filter" , element: <Rent_commercial_plots_filter />},
      {path: "map_rent_commercial_plots" , element: <M_rent_commercial_plots />},
      {path: "rent_residential_plots" , element: < Rent_residential_plots />},
      {path: "rent_residential_plots_filter" , element: < Rent_residential_plots_filter  />},
      {path: "map_rent_residential_plots" , element: < M_rent_residential_plots />},
      {path: "sell_residential_plots" , element: < Sale_residential_plots />},
      {path: "sell_residential_plots_filter" , element: < Sale_residential_plots_filter />},
      {path: "map_sale_residential_plots" , element: <M_sale_residential_plots/>},
      {path: "sell_commercial_workspace" , element: <Sell_commercial_workspace/>},
      {path: "sell_commercial_workspace_filter" , element: <Sale_commercial_workspace_filter/>},
      {path: "map_sale_commercial_workspace" , element: <M_sale_commercial_workspace/>},
      {path: "rent_commercial_workspace" , element: <Rent_commercial_workspace/>},
      {path: "rent_commercial_workspace_filter" , element: <Rent_commercial_workspace_filter/>},
      {path: "map_rent_commercial_workspace" , element: <M_rent_commercial_workspace/>},
      {path: "residential_projects" , element: <Residential_projects/>},
      {path: "residential_projects_filter" , element: <Residential_projects_filter/>},
      {path: "map_residential_projects" , element: <M_residential_projects_filter/>},

      
    ],
  },
]);

const Main = () => {
  return <RouterProvider router={router} />;
};

export default Main;