import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../images/me.jpg"

export default function Hero() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1070px] mx-auto px-4 text-black">

        <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-10 py-14 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left space-y-3">
            <h1 className="text-sm sm:text-base text-black">
              Hello, I'm
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Dheeraj Prajapati
            </h2>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#5117ff]">
              React JS Developer
            </h3>

            <p className="text-sm sm:text-base text-black max-w-[500px] mx-auto md:mx-0">
              I build modern, responsive, and user-friendly websites using
              cutting-edge frontend technologies.
            </p>

            <p className="text-[38px] sm:text-base text-[#5117ff]">
              HTML, CSS, JavaScript, React and Tailwind css
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4 ">
              <NavLink to="/projects">
                <button className="bg-[#6f42f5] hover:bg-[#5a32d6] transition text-white rounded-full px-6 py-2 cursor-pointer">
                  View Projects
                </button>
              </NavLink>

              <NavLink to="/contact">
                <button className="border-2 border-[#6f42f5] text-black rounded-full px-6 py-2 hover:bg-[#6f42f5] hover:text-white transition duration-300 cursor-pointer">
                  Contact Me
                </button>
              </NavLink>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="Hero"
              className="w-[200px] sm:w-[260px] md:w-[320px] shadow-black/50"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
