import React from 'react'

const Hero = ({title, subtitle}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div className="text-center">
        <h1
          className="text-2xl font-extrabold text-white sm:text-2xl md:text-3xl"
        >
          {title}
        </h1>
        <p className="my-4 text-xl text-dark">
          {subtitle}
        </p>
      </div>
    </div>
  </section>
  )
}

export default Hero