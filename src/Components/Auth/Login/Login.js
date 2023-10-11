import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMobile, setPassword, setRole, updateState } from '../../Auth/store/userSlice/authSlice'
import axios from 'axios';
import baseurl from '../../../api/baseurl';
const Login = (props) => {

    const loginApi = `${baseurl}authenticate/login-authenticate`
    const dispatch = useDispatch();

    const authData = useSelector((state) => {
        return state.authSlice
    })


    const loginUser = () => {
        axios.post(loginApi, {
            hostNumber: authData.mobile,
            hostPassword: authData.password
        })
            .then((response) => {
                if (response.data.success) {
                    dispatch(setMobile(''));
                    dispatch(setPassword(''));
                    dispatch(setRole(response.data.role));
                    dispatch(updateState(true));
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="h-scree w-screen grid md:grid-cols-2 gap-10">
            <img src='./images/visitorAppLogo.png' alt='Logo' className='absolute w-[20%] md:w-[10%] top-1 left-1'></img>
            <div className='flex items-center justify-center md:justify-end'>
                <img src='./images/loginImage.png' alt='Login Logo' className='w-[70%]'></img>
            </div>
            <div className=" w-[100%] flex items-center justify-center md:justify-start">
                <div className=' shadow-md p-8'>
                <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                        Mobile
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 focus:outline-none focus:border-violet-500"
                        type="number"
                        id="mobile"
                        name="mobile"
                        placeholder="Enter your mobile"
                        required
                        onChange={(e) => { dispatch(setMobile(e.target.value)) }}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 focus:outline-none focus:border-violet-500"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => { dispatch(setPassword(e.target.value)) }}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-violet active:bg-violet-700"
                        onClick={loginUser}
                    >
                        Log In
                    </button>

                    </div>
                    </div>
            </div>
        </div>
    );
};

export default Login;

