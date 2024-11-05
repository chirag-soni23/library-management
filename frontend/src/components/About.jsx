import React from 'react';
import library1 from '../assets/library1.jpg';
import library2 from '../assets/library2.jpg';
import library3 from '../assets/library3.jpg';
import library4 from '../assets/library4.jpg';
import library5 from '../assets/library5.jpg';
import library6 from '../assets/library6.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Our Library</h1>
        
        <p className="text-gray-600 text-center mb-8">
          Welcome to our library! We provide a diverse collection of books and resources, from fiction to reference materials, to support your reading and research needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src={library1} alt="Library" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src={library2} alt="Library" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src={library3} alt="Library" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src={library4} alt="Library" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src={library5} alt="Library" className="w-full h-64 object-cover rounded-lg shadow-md" />
          <img src={library6} alt="Library" className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default About;
