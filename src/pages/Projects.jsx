import React from 'react'
import projectsApi from "../Api/ProjectsApi.json"
import { NavLink } from 'react-router-dom'

const Project = () => {
  return (
    <section className="w-full mt-12 sm:mt-16">
      <div className="max-w-[1070px] mx-auto px-4">

        <NavLink to="/projects">
          <h2 className="text-center text-2xl sm:text-3xl md:text-[40px] font-bold text-[#5117ff] mb-8 sm:mb-10">
            My Projects
          </h2>
        </NavLink>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsApi.map((cur, ind) => {
            const { title, description, image, tech, github, liveDemo } = cur

            return (
              <div
                key={ind}
                className="shadow-xl shadow-black/30 p-4 rounded-lg bg-white flex flex-col"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[160px] sm:h-[180px] md:h-[200px] rounded-md object-cover"
                />

                <h1 className="text-sm sm:text-base md:text-lg font-bold mt-3">
                  {title}
                </h1>

                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-600">
                  {tech}
                </p>

                <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-1 flex-grow">
                  {description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-500 transition"
                  >
                    Github
                  </a>

                  <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-500 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Project;
