import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import ProjectListings from "./components/ProjectListings";

const App = () => {
  return (
    <>
      <Navbar name="Big Day Story" />
      <Hero
        title="Engaging with Wedding Vendors in your area"
        subtitle="The ultimate destination for every wedding need..."
      />
      <HomeCards />
      <ProjectListings title="Wedding Projects"/>

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;