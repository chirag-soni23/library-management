import React from "react";
import { FcRules } from "react-icons/fc";
import { rulesList } from "../context/Rules";

const Rules = () => {
   return (
    <div className="container mx-auto mt-10 p-6">
      <h1 className="text-3xl w-full font-bold text-left bg-[#08D665] text-white p-4 rounded-md mb-6 flex items-center gap-5"><FcRules className="text-4xl"/> Library Rules</h1>
      <ul className="bg-gray-100 p-6 rounded-md shadow-white shadow-lg">
        {rulesList.map((rule, index) => (
          <li key={index} className="mb-4 text-lg">
            <span className="font-bold">{index + 1}.</span> {rule}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rules;
