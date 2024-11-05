import React from 'react';
import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import sir from '../assets/sir.jpg';

const Footer = ({ homeRef, aboutRef, cardRef, rulesRef, servicesRef, contactRef }) => {
    const scrollToSection = (ref) => {
        const offset = 100;
        const elementPosition = ref.current.getBoundingClientRect().top;
        console.log(window.scrollY)
        const offsetPosition = elementPosition + window.scrollY - offset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      };
    return (
        <footer className="bg-gray-900 text-white py-8 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-6 md:mb-0">
                    <img
                        src={sir}
                        alt="Profile"
                        className="w-16 h-16 rounded-full border-2 border-white mr-4 shadow-lg"
                    />
                    <div>
                        <p className="text-lg font-semibold">Nirmal Vaishnav</p>
                        <a href="van.featherstone@medusind.com" className="text-sm">van.featherstone@medusind.com</a>
                        <div className="flex items-center mt-1">
                            <FaInstagram className="text-xl mr-2" />
                            <a
                                href="https://www.instagram.com/yourprofile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm hover:underline"
                            >
                                Instagram
                            </a>
                        </div>
                        <div className="flex items-center mt-2">
                            <FaMapMarkerAlt className="text-xl mr-2" />
                            <a href='https://www.google.com/maps/place/973X%2BCMX+Vaishnav+library,+Kenpura+Rd,+Kellawara,+Rani+Gaon,+Rajasthan+306115/data=!4m2!3m1!1s0x39428500568987af:0xe9438340530bd0c8?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESCjExLjE1Mi4xMDAYACDXggMqUSw5NDI0MjUxNyw5NDIxMjQ5Niw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw0NzA4NzExOCw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D' className="text-sm">Vaishnav Library</a>
                        </div>
                    </div>
                </div>

                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                    <li className="hover:text-gray-400 transition duration-300 cursor-pointer" onClick={() => scrollToSection(homeRef)}>
                        Home
                    </li>
                    <li className="hover:text-gray-400 transition duration-300 cursor-pointer" onClick={() => scrollToSection(aboutRef)}>
                        About
                    </li>
                    <li className="hover:text-gray-400 transition duration-300 cursor-pointer" onClick={() => scrollToSection(servicesRef)}>
                        Services
                    </li>
                    <li className="hover:text-gray-400 transition duration-300 cursor-pointer" onClick={() => scrollToSection(cardRef)}>
                        Facilities
                    </li>
                    <li className="hover:text-gray-400 transition duration-300 cursor-pointer" onClick={() => scrollToSection(rulesRef)}>
                        Rules
                    </li>
                    <li className="hover:text-gray-400 transition duration-300 cursor-pointer" onClick={() => scrollToSection(contactRef)}>
                        Contact
                    </li>
                   
                </ul>
            </div>
            <div className="text-center mt-6">
                <p className="text-sm">Created by Chirag Soni © {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
