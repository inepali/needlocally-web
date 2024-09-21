import React from "react";
import Project from "./Project";
import { useState, useEffect } from "react";
import Spiner from "./Spiner";

const ProjectListing = ({ title, isHome = false }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {

      const apiUrl = isHome?'/api/projects?_limit=3':'/api/projects';
      try {
        const resp = await fetch(apiUrl);
        const data = await resp.json();
        console.log (data)
        setProjects(data);

      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false)
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {title}
        </h2>
        
          { loading ? (
              <Spiner loading={loading}/>

          ) :(<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { projects.map((project) => (
            <Project key={project.id} project={project} />
          ))
        }</div>)
        }
        </div>
    </section>
  );
};

export default ProjectListing;