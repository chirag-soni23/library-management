import React, { useRef, useState } from 'react';
import { Data } from '../context/Data.js';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const Card = () => {
  const cardContainerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState(null);

  const scrollLeft = () => {
    gsap.to(cardContainerRef.current, {
      scrollTo: {
        x: '-=340',
      },
      duration: 1,
      ease: "power3.out"
    });
  };

  const scrollRight = () => {
    gsap.to(cardContainerRef.current, {
      scrollTo: {
        x: '+=340',
      },
      duration: 1,
      ease: "power3.out"
    });
  };

  const openModal = (facility) => {
    setSelectedFacility(facility);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFacility(null);
  };

  return (
    <div className='bg-black h-full w-full'>
      <h1 className="uppercase font-bold text-2xl md:text-3xl text-white text-center mt-10">
        top <span className="text-[#08D665]">facilities</span>
      </h1>
      <div className="relative w-full mt-20 px-8">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#08D665] text-white rounded-full p-2 transition-transform hover:scale-110"
        >
          <FaChevronLeft className='text-xl' />
        </button>
        <div
          ref={cardContainerRef}
          className="flex gap-4 overflow-x-auto p-2 flex-nowrap scrollbar-hide"
        >
          {Data.map((ele) => (
            <div
              key={ele.id}
              className="flex-shrink-0 w-80 group bg-black text-white rounded-lg overflow-x-hidden transition-shadow duration-300 shadow-gray-600 shadow-2xl"
            >
              <img src={ele.image} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h1 className="text-xl font-bold mb-2 group-hover:text-[#08D665] transition-colors duration-300">
                  {ele.name}
                </h1>
                <h2 className="mt-2 text-sm">
                  {ele.description.slice(0, 100)}...
                </h2>
                <button
                  onClick={() => openModal(ele)} 
                  className="bg-[#08D665] rounded-full p-2 text-white mt-4 transition-transform transform hover:scale-105 px-8"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#08D665] text-white rounded-full p-2 transition-transform hover:scale-110"
        >
          <FaChevronRight className='text-xl' />
        </button>
      </div>

      {/* Modal for detailed information */}
      {isModalOpen && selectedFacility && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/3">
            <img src={selectedFacility.image} alt={selectedFacility.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-bold mb-2">{selectedFacility.name}</h2>
            <p>{selectedFacility.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-[#08D665] text-white rounded-full p-2 transition-transform transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
