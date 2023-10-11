import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams(); // Get the user ID from the URL parameters
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user profile data using the userId
    // You can use axios or any other method to fetch data
    // For example, assuming you have an API endpoint for user data:
    fetch(`http://localhost:8000/employee/get-all-employee/${userId}`) // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setUserData(data); // Update the state with user profile data
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]); // Make sure to include userId in the dependency array

  if (!userData) {
    return <p>Loading...</p>; // You can replace this with a loading spinner or component
  }

  return (
    <div className="bg-white shadow-md rounded-lg max-w-2xl mx-auto p-8 mt-8">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-8">
        {/* Profile Photo */}
        <img
          src={userData.profilePhoto} // Replace with the appropriate property from your fetched data
          alt="User"
          className="w-32 h-32 rounded-full mx-auto md:mx-0"
        />

        {/* User Info */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold">{userData.name}</h1> {/* Replace with the appropriate property */}
          <p className="text-gray-500">{userData.email}</p> {/* Replace with the appropriate property */}
        </div>
      </div>

      {/* User Details */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">User Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-500 py-4">
              Phone : <span>{userData.phone}</span> {/* Replace with the appropriate property */}
            </p>
            <p className="text-gray-500 pb-4">
              Address : {userData.address} {/* Replace with the appropriate property */}
            </p>
            {/* Add more user details here */}
          </div>
          {/* Add more user details here */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
