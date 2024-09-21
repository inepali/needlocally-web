import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spiner from "../components/Spiner";
import Project from "../components/Project";
import ProjectDetails from "../components/ProjectDetails";

const ProjectPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, []);

  return (
    <>
      {loading ? (
        <Spiner loading={loading} />
      ) : (
        <ProjectDetails project={project} />
      )}
    </>
  );
};

export default ProjectPage;