import React from "react";
import { Route, createBrowserRouter, creteRoutesFromElements, RouterProvider } from react-router-dom;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import ProjectListing from "./components/ProjectListing";
import ViewAll from "./components/ViewAll";

const App = () => {
  return (
    <>
      <Navbar name="Big Day Story" />
      <Hero
        title="Engaging with Wedding Vendors in your area"
        subtitle="The ultimate destination for every wedding need..."
      />
      <HomeCards />
      <ProjectListing title="Wedding Projects"/>
      <ViewAll />


    </>
  );
};

export default App;