import React, { useState , useEffect , useRef} from 'react';
import { IoIosOptions } from 'react-icons/io';
import { FcBusinessman } from 'react-icons/fc';
import Routingcomponent from '../../routingComponent/component/Routingcomponent';
import Sidebar from '../../ui/component/Sidebar';
import { Tooltip, Zoom } from '@mui/material';

export default function Application(props) {
  const [sideBarOpen, setSideBarState] = useState(true);
  const [mobileSideBar, setMobileBar] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // New state for the dropdown
 
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  
  useEffect(() => {
    const closeDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <>
      <Sidebar sideBarOpen={sideBarOpen} mobileSideBar={mobileSideBar} setMobileBar={setMobileBar} />

      {/*MainWindow*/}
      <div
        className={`${sideBarOpen ? 'md:left-[20%] md:w-[80%] duration-300' : 'md:left-[5%] md:w-[95%] duration-300'} left-0 w-screen absolute h-screen duration-0`}
        id='application'
      >
        {/*Navbar*/}
        <nav className='h-[8%] border-b-2 flex items-center justify-between px-8 w-[100%]'>
          <Tooltip
            title={
              <React.Fragment>
                {sideBarOpen ? (
                  <h1 className='text-[15px] m-1'>Minimize</h1>
                ) : (
                  <h1 className='text-[15px] m-1'>Maximize</h1>
                )}
              </React.Fragment>
            }
            arrow
            TransitionComponent={Zoom}
          >
            <h1 onClick={() => setSideBarState((prev) => !prev)} className='hidden md:block hover:bg-gray-100 rounded-full p-2'>
              <IoIosOptions size={'28'} />
            </h1>
          </Tooltip>

          <h1 onClick={() => setMobileBar((prev) => !prev)} className='block md:hidden hover:bg-gray-100 rounded-full'>
            <IoIosOptions size={'28'} />
          </h1>

          {/* Dropdown */}
          <div className='relative'>
            <div onClick={toggleDropdown} className='cursor-pointer'>
              <h1>
                <FcBusinessman size={'30'} />
              </h1>
              <h1 className='text-gray-500 text-[15px]'>Admin</h1>
            </div>
            {isDropdownOpen && (
              <div className='z-10 top-full left-0 mt-2 bg-white border rounded-md shadow-md'>
                <ul>
                  <li className='px-4 py-2'>Your Profile</li>
                  <li className='px-4 py-2'>Notifications</li>
                  <li className='px-4 py-2'>Logout</li>
                </ul>
              </div>
            )}
          </div>
          {/* End Dropdown */}
        </nav>

        {/*PageWindow*/}
        <div className='top-[8%] left-0 w-[100%] h-[92%] bg-white overflow-auto px-8 pt-6 flex flex-col items-start justify-start '>
          <Routingcomponent/>
        </div>
      </div>
    </>
  );
}
