import React, { useEffect, useState } from 'react';

const thoughtsArray = [
  "Life is what happens when you're busy making other plans.",
  "The purpose of life is not to be happy. It is to be useful.",
  "Success is not final, failure is not fatal.",
  "Only in the darkness can you see the stars.",
  "Happiness is not something ready made. It comes from your own actions.",
  "The only way to do great work is to love what you do.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail."
];

function Thoughts() {
  const continuousThoughts = [...thoughtsArray, ...thoughtsArray];

  return (
    <div className="overflow-hidden bg-black p-4">
      <div className="animate-scroll whitespace-nowrap flex">
        {continuousThoughts.map((thought, index) => (
          <span key={index} className="text-[#08D665] text-xl mx-8">
            {thought}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Thoughts;
