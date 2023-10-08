import React from 'react'
import { useDispatch } from 'react-redux'
import {updateState} from '../store/authSlice'
export default function Loginwindow(props) {
  const dispatch = useDispatch();
  return (
    <div className='h-[40%] w-[20%] border-2 border-violet-400 rounded-lg bg-violet-200 flex items-center justify-center'>
      <button className='bg-violet-600 text-white px-5 py-1 rounded' onClick={() => {dispatch(updateState())}}>LOGIN</button>
    </div>
  )
}
