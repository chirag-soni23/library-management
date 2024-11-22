import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { UserData } from '../context/User';
import { Link, useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ homeRef, aboutRef, cardRef, rulesRef, servicesRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {logout,user} = UserData();
  const navigate = useNavigate('/login');
  const handleLogout = () =>{
    logout(navigate);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      gsap.to(".navbar", {
        backgroundColor: "#ffffff",
        scrollTrigger: {
          trigger: ".navbar",
          start: "top top",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  const scrollToSection = (ref) => {
    const offset = 100;
    const elementPosition = ref.current.getBoundingClientRect().top;
    console.log(window.scrollY)
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <div className={`navbar w-full p-6 flex justify-between lg:px-40 sm:px-4 items-center font-bold fixed z-50 left-0 top-0 right-0 bg-black`}>
      <div className="name">
        <h1 className="text-3xl text-[#08D665] uppercase">library hub</h1>
      </div>
      <div
        className="md:hidden text-white bg-[#06110b] flex items-center justify-center p-2 rounded text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {/* Menu items */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex text-white outline-none items-center gap-6 absolute md:static top-20 left-0 w-full md:w-auto md:bg-transparent bg-black p-6 md:p-0 transition-all duration-300`}
      >
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300" onClick={() => scrollToSection(homeRef)}>Home</li>
        <li className="hover:text-[rgb(8,214,101)] cursor-pointer transition-all duration-300" onClick={() => scrollToSection(aboutRef)}>About</li>
        <li className="hover:text-[rgb(8,214,101)] cursor-pointer transition-colors duration-300" onClick={() => scrollToSection(servicesRef)}>Services</li>
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300" onClick={() => scrollToSection(cardRef)}>Facilities</li>
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300" onClick={() => scrollToSection(rulesRef)}>Rules</li>
        <li className="hover:text-[#08D665] cursor-pointer transition-all duration-300" onClick={() => scrollToSection(contactRef)}>Contact</li>
        <button onClick={handleLogout} className='bg-red-500 text-white p-2 rounded-md'>Logout</button>
        <Link to={"/admin"} className={`bg-green-500 text-white p-2 rounded-md ${user.role == "admin"?"":"hidden"}`}>Admin</Link>
      </ul>
    </div>
  );
};

export default Navbar;
