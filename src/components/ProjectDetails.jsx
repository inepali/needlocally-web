import React from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectDetails = ({ project }) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">{project.type}</div>
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>

          <div className="mb-5">{project.description}</div>

          <h3 className="text-indigo-500 mb-2">Budge: {project.budget}</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <FaMapMarker className="inline mb-1 mr-1 text-lg"></FaMapMarker>
              {project.location}
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 class="text-xl font-bold mb-6">Manage Job</h3>
        <Link
          to="/project/edit/3"
          class="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
        >
          Edit Project
        </Link>
        <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
          Delete Project
        </button>
      </div>
    </>
  );
};

export default ProjectDetails;
