import React from "react";
import { FaMapMarker }  from 'react-icons/fa';
import { useState } from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{project.type}</div>
          <h3 className="text-xl font-bold">{project.title}</h3>
        </div>

        <div className="mb-5">
          {showFullDescription
            ? project.description
            : project.description.substring(0, 100) + " ..."}

          <button
            onClick={() => setShowFullDescription((preState) => !preState)}
            className="text-indigo-500 mb-5 hover:text-indigo-600"
          >
            {showFullDescription ? "less" : "more"}
          </button>
        </div>

        <h3 className="text-indigo-500 mb-2">Budge: {project.budget}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline mb-1 mr-1 text-lg"></FaMapMarker>
            {project.location}
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
