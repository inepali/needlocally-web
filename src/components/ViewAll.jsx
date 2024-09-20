import React from 'react'
import { Link } from 'react-router-dom'

const ViewAll = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
    <Link
      to="/projects"
      className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      All Projects
    </Link>
  </section>
  )
}

export default ViewAll