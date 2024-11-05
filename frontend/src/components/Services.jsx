import React from "react";
import { servicesList } from "../context/Services";
const Services = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl mt-10 uppercase text-white font-bold text-center mb-8">
        <span>Our</span> <span className="text-[#08D665]">services</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="text-4xl transition-transform duration-300 transform group-hover:scale-105">
              {service.icon}
            </div>
            <h2 className="text-2xl font-semibold mt-4 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
