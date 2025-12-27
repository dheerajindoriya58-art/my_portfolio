import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/png.jpg"

export default function About() {
  return (
    <div className='w-full bg-black'>

    <div className="max-w-[1070px] mx-auto px-4 bg-black text-white">

      <div className="grid grid-cols-1 md:grid-cols-[40%_auto] gap-6 md:gap-10 py-8 md:p-10 items-center">

        <div className="w-full flex justify-center">
          <img
            src={logo}
            alt="About"
            className="w-[220px] sm:w-[280px] md:w-full rounded-full"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold">
            About Me
          </h1>

          <h1 className="mt-2">
            Hi, I'm <span className="font-semibold">Dheeraj Prajapati</span>,
          </h1>

          <p className="text-base sm:text-lg py-2">
            A passionate{" "}
            <span className="text-[#a183fc] font-medium">
              Frontend Developer
            </span>{" "}
            and I love building modern, responsive, and user-friendly websites.
          </p>

          <h3 className="text-lg sm:text-xl md:text-[22px] font-medium text-[#a183fc] py-1">
            HTML, CSS, JavaScript, and React
          </h3>

          <p className="text-sm sm:text-base text-justify md:text-left">
            As a fresher, I’m constantly learning and practicing projects like
            portfolio websites, to-do apps, and e-commerce layouts to sharpen my
            skills. My goal is to grow as a developer and contribute to real-world
            projects.
          </p>

          <NavLink to="/projects">
            <button className="bg-[#7142ff] text-white rounded-full px-6 py-2 mt-4 text-base">
              See My Work
            </button>
          </NavLink>
        </div>

      </div>
    </div>
    </div>
  )
}
