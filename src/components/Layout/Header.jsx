import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full bg-[#5117ff] shadow-xl shadow-black/40 sticky top-0 z-50">
      <div className="max-w-[1070px] mx-auto px-4">

        {/* Navbar */}
        <nav className="flex justify-between items-center h-[70px] sm:h-[80px]">
          <NavLink to="/">
            <h1 className="text-lg sm:text-xl font-bold text-white">
              Portfolio
            </h1>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-white">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbar(!navbar)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {navbar ? <RiCloseLine size={26} /> : <RiMenu3Line size={26} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            navbar ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-center py-4 bg-[#5117ff] text-white border-t border-white/30">
            <li onClick={() => setNavbar(false)}><NavLink to="/">Home</NavLink></li>
            <li onClick={() => setNavbar(false)}><NavLink to="/About">About</NavLink></li>
            <li onClick={() => setNavbar(false)}><NavLink to="/projects">Projects</NavLink></li>
            <li onClick={() => setNavbar(false)}><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
        </div>

      </div>
    </header>
  );
}

export default Header;
