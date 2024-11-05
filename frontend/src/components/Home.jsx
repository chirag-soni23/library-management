import React from 'react';
import { ReactTyped } from "react-typed";
import book from '../assets/book.png';

const Home = ({contactRef}) => {
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
    <div className="relative flex flex-col md:flex-row w-full items-center justify-between h-full p-6 px-40 mt-32  font-bold">
      <div className="text-white text-center md:text-left md:w-1/2 space-y-4 z-10">
        <h2 className="text-[#08D665] text-xl md:text-2xl">HELLO!</h2>
        <h1 className={`text-3xl md:text-4xl font-bold uppercase text-white}`}>
          <ReactTyped strings={["Track books, members, and issues seamlessly","Digitalize your library management","Efficient library solutions at your fingertips"]} typeSpeed={50} loop backSpeed={30} />
        </h1>
        
        <p className={`text-sm md:text-base max-w-lg mx-auto md:mx-0 text-white `}>
        A library management system designed to simplify the process of managing books, members, and book lending. Keep track of all your inventory, monitor book availability, manage members, and easily record issued and returned books.
        </p>
        
        <button ref={contactRef} onClick={()=>scrollToSection(contactRef)} className="text-white bg-[#08D665] p-3 rounded-md mt-4">Contact Me</button>
      </div>
      
      <div className="mt-8 md:mt-0 flex justify-center z-10">
        <img 
          src={book} 
          alt="Sky illustration" 
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto" 
        />
      </div>
    </div>
  );
};

export default Home;
