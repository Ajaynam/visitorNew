import React from 'react';

const UserProfile = () => {
    return (
        <div className="bg-white shadow-md rounded-lg max-w-2xl mx-auto p-8 mt-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-8">
                {/* Profile Photo */}
                <img
                    src="images/visitor-photo.png"
                    alt="User"
                    className="w-32 h-32 rounded-full mx-auto md:mx-0"
                />

                {/* User Info */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-semibold">Akash singh</h1>
                    <p className="text-gray-500">akash.sing@example.com</p>

                </div>
            </div>

            {/* User Details */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold">User Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-gray-500 py-4 ">Phone : <span>(123) 456-7890</span></p>
                        <p className="text-gray-500 pb-4">Address : 123 Main St, City</p>
                        <p className="text-gray-600 pb-4">Employer ID : E12345</p>
                        <p className="text-gray-600 pb-4">Department : Marketing</p>
                        <p className="text-gray-600 pb-4">D.O.B : January 1, 1990</p>
                        <p className="text-gray-600 pb-4">Gender : Male</p>
                    </div>
                    {/* Add more user details here */}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
