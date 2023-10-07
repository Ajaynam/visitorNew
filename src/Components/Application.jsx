import React, { useState } from 'react'
import { IoIosOptions } from 'react-icons/io'
import { FcBusinessman } from 'react-icons/fc'
import Routingcomponent from './Routingcomponent';

import Sidebar from './Sidebar';
import { Tooltip, Zoom } from '@mui/material';
export default function Application() {

  const [sideBarOpen, setSideBarState] = useState(false);

  const [mobileSideBar, setMobileBar] = useState(true);

  return (
    <>
      <Sidebar sideBarOpen={sideBarOpen} mobileSideBar={mobileSideBar} setMobileBar={setMobileBar} />

      {/*MainWindow*/}
      <div className={`${sideBarOpen ? 'md:left-[20%] md:w-[80%] duration-300' : 'md:left-[5%] md:w-[95%] duration-300'} left-0 w-screen absolute h-screen duration-0`} id='application'>

        {/*Navbar*/}
        <nav className='h-[8%] border-b-2 flex items-center justify-between px-8 w-[100%]'>
          <Tooltip title={
            <React.Fragment>
              {
                sideBarOpen ?
                  <h1 className='text-[15px] m-1'>Minimize</h1> :
                  <h1 className='text-[15px] m-1'>Maximize</h1>
              }
            </React.Fragment>} arrow TransitionComponent={Zoom}>
            <h1 onClick={() => { setSideBarState(prev => !prev) }} className='hidden md:block hover:bg-gray-100 rounded-full p-2'><IoIosOptions size={'28'} /></h1>
          </Tooltip>
          

          <h1 onClick={() => { setMobileBar(prev => !prev) }} className='block md:hidden hover:bg-gray-100 rounded-full'><IoIosOptions size={'28'} /></h1>

          <div className='flex items-center'>
            <h1><FcBusinessman size={'30'} /></h1>
            <h1 className=' text-gray-500 text-[15px]'>
              Admin<br></br>
              <span className=' font-bold '>
                Farmer
              </span>
            </h1>
          </div>
        </nav>

        
        {/*PageWindow*/}
        <div className='absolute top-[8%] left-0 w-[100%] h-[92%] bg-white overflow-auto px-8 pt-6 flex flex-col items-start justify-start'>
        <Routingcomponent />
        </div>
      </div>
    </>

  )
}
