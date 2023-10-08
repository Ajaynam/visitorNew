// src/components/Card.js
import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-xl text-gray-500 font-semibold">{title}</h3>
      <p className="text-3xl mt-2">{value}</p>
    </div>
  );
};

export default Card;
