import React from 'react'
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ProjectListing from "../components/ProjectListing";
import ViewAll from "../components/ViewAll";


const HomePage = () => {
  return (
    <>

      <Hero
        title="Engaging with Wedding Vendors in your area"
        subtitle="The ultimate destination for every wedding need..."
      />
      <HomeCards />
      <ProjectListing title="Upcoming Projects" isHome={true} />
      <ViewAll />
    </>
  )
}

export default HomePage