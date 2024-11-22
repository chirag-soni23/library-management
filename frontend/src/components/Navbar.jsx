import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { UserData } from '../context/User';
import { Link, useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ homeRef, aboutRef, cardRef, rulesRef, servicesRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = UserData();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (ref) => {
    const offset = 100; 
    const elementPosition = ref.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
    setIsOpen(false);
  };

  return (
    <div className="navbar fixed top-0 left-0 right-0 w-full bg-black z-50 p-4 lg:px-20 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div className="text-3xl text-[#08D665] uppercase font-bold">Library Hub</div>

      {/* Mobile menu toggle */}
      <div
        className="md:hidden text-white bg-[#06110b] p-2 rounded text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Full-screen overlay menu for small screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center gap-8 text-white z-50 md:hidden">
          {/* Cross Button */}
          <div
            className="absolute top-5 right-5 text-3xl text-white cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>

          <ul className="flex flex-col gap-8 text-lg font-medium items-center">
            <li
              className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
              onClick={() => scrollToSection(homeRef)}
            >
              Home
            </li>
            <li
              className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
              onClick={() => scrollToSection(aboutRef)}
            >
              About
            </li>
            <li
              className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
              onClick={() => scrollToSection(servicesRef)}
            >
              Services
            </li>
            <li
              className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
              onClick={() => scrollToSection(cardRef)}
            >
              Facilities
            </li>
            <li
              className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
              onClick={() => scrollToSection(rulesRef)}
            >
              Rules
            </li>
            <li
              className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact
            </li>
          </ul>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-all duration-300"
          >
            Logout
          </button>
          <Link
            to="/admin"
            className={`bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300 ${
              user.role === "admin" ? "" : "hidden"
            }`}
          >
            Admin
          </Link>
        </div>
      )}

      {/* Horizontal menu for large screens */}
      <ul className="hidden md:flex gap-8 text-white items-center">
        <li
          className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </li>
        <li
          className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </li>
        <li
          className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
          onClick={() => scrollToSection(servicesRef)}
        >
          Services
        </li>
        <li
          className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
          onClick={() => scrollToSection(cardRef)}
        >
          Facilities
        </li>
        <li
          className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
          onClick={() => scrollToSection(rulesRef)}
        >
          Rules
        </li>
        <li
          className="hover:text-[#08D665] cursor-pointer transition-all duration-300"
          onClick={() => scrollToSection(contactRef)}
        >
          Contact
        </li>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-all duration-300"
        >
          Logout
        </button>
        <Link
          to="/admin"
          className={`bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-all duration-300 ${
            user.role === "admin" ? "" : "hidden"
          }`}
        >
          Admin
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
