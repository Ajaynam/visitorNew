// src/components/VisitorCard.js
import React, { useEffect, useState } from 'react';
import Header from '../../ui/component/Header';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const VisitorCard = (props) => {
    const name = "John Doe";
    // const photoUrl = "https://example.com/johndoe.jpg";
    const contactNumber = "123-456-7890";
    const id = "123456";
    const checkInTime = "2023-10-08 14:30";
    const purpose = "Meeting";
    const hostName = "Jane Smith";

    const handlePrint = () => {
        window.print();
    };

    const Location=useLocation()

    const latestVisitorAPI = 'http://localhost:8000/visitor/visitor-card';

    const [cardData, setCardData] = useState([]);

    console.log(Location.state)
    const getLatestVisitor = () => {
        axios.post(latestVisitorAPI,{ cardId:Location.state.cardId })
        .then((response) => {
            console.log(response)
            setCardData(response.data)
        })
        .catch((error) => {
        console.log(error)
        })
    }
    if (Location.state !== null) {
        useEffect(() => {
            getLatestVisitor();
        }, []) 
    }
    

    return (
        <>
            <Header heading={"Visitor card"} title={"RA Masale Pvt. Ltd. welcomes you"} />
            {
                cardData.length ?
                    <>
                        <div className="bg-white rounded-lg shadow-lg px-16 py-8 w-[94%] relative left-[3%] md:w-[30%] md:left-[35%]">
                            <div className="flex justify-center">
                                <img
                                    src={''}
                                    alt={name}
                                    className="w-32 h-32  border-4 border-blue-500"
                                />
                            </div>
                            <div className="text-center mt-4">
                                <h2 className="text-xl font-semibold">{cardData[0].visitorName}</h2>
                                <h5 className="text-gray-600 my-1 text-sm">Phone: {cardData[0].visitorMobile}</h5>
                                <h5 className="text-blue-400 text-sm">ID: {cardData[0].visitorId}</h5>
                                <hr className="my-2 border-gray-300" />
                                <h5 className="text-gray-600 text-sm">Check-in: {cardData[0].checkInTime}</h5>
                                <h5 className="text-gray-600 my-1 text-sm">Purpose: {cardData[0].reason}</h5>
                                <h5 className="text-gray-600 text-sm">Host: {cardData[0].hostName}</h5>
                                <button
                                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                                    onClick={handlePrint}
                                >
                                    Print Card
                                </button>
                            </div>
                        </div>
                    </> :
                    <>
                        <h1>No new entry</h1>
                    </>
            }
            
        </>
    );
};

export default VisitorCard;
