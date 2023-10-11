

import React from 'react';

import { useDispatch } from 'react-redux';
import {} from '../../Auth/store/userSlice/authSlice'
const Login = (props) => {

    const dispatch = useDispatch();

  

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Mobile
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                            type="submit"
                        >
                            Sign In
                        </button>
                        <a
                            className="text-gray-500 hover:text-blue-500 text-sm"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

