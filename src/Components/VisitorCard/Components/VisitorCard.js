// src/components/VisitorCard.js
import React from 'react';

const VisitorCard = () => {
    const name = "John Doe";
    const photoUrl = "https://example.com/johndoe.jpg";
    const contactNumber = "123-456-7890";
    const id = "123456";
    const checkInTime = "2023-10-08 14:30";
    const purpose = "Meeting";
    const hostName = "Jane Smith";

    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <h2 className=' text-2xl font-semibold pb-6 text-center'>Visitor Card</h2>
            <div className="bg-white rounded-lg shadow-lg px-16 py-8 mx-auto  max-w-sm">
                <div className="flex justify-center">
                    <img
                        src={photoUrl}
                        alt={name}
                        className="w-32 h-32  border-4 border-blue-500"
                    />
                </div>
                <div className="text-center mt-4">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <h5 className="text-gray-600 my-1 text-sm">Phone: {contactNumber}</h5>
                    <h5 className="text-blue-400 text-sm">ID: {id}</h5>
                    <hr className="my-2 border-gray-300" />
                    <h5 className="text-gray-600 text-sm">Check-in: {checkInTime}</h5>
                    <h5 className="text-gray-600 my-1 text-sm">Purpose: {purpose}</h5>
                    <h5 className="text-gray-600 text-sm">Host: {hostName}</h5>
                    <button
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                        onClick={handlePrint}
                    >
                        Print Card
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VisitorCard;
