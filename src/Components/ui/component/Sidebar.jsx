import { Tooltip, Zoom } from '@mui/material'
import React from 'react'
import { AiFillAppstore, AiFillCloseCircle } from 'react-icons/ai'
import { MdInsertInvitation } from 'react-icons/md'
import {  RiLogoutCircleRFill } from 'react-icons/ri'
import { FaListAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { logoutUser } from '../../Auth/store/userSlice/authSlice'
import { useDispatch, useSelector } from 'react-redux'
export default function Sidebar(props) {
  const dispatch = useDispatch();
  const sideBarElements = [
    {
      title: 'Dashboard',
      routeLink: '/',
      icon: <AiFillAppstore size={22} color='gray' />,
      ut:['Admin','Guard','Employee']
    },
    {
      title: 'Visitor Logbook',
      routeLink: 'visit-logbook',
      icon: <FaListAlt size={20} color='gray' />,
      ut: ['Admin', 'Guard','Employee']

    },
    {
      title: 'New Entry',
      routeLink: 'new-entry',
      icon: <MdInsertInvitation size={23} color='gray' />,
      ut: ['Guard']

    },
    
    {
      title: 'Manange Employees',
      routeLink: 'employee-table',
      icon: <MdInsertInvitation size={23} color='gray' />,
      ut: ['Admin']

    }
    ,
    {
      title: 'Pending Entry',
      routeLink: 'pending-entry',
      icon: <MdInsertInvitation size={23} color='gray' />,
      ut: ['Employee']

    },
    {
      title: 'Logout',
      routeLink: '',
      icon: <RiLogoutCircleRFill size={23} color='gray' />,
      ut: ['Admin', 'Guard', 'Employee']

    }
  ]


  const userType = useSelector((state) => {
    console.log(state)
    return state.authSlice.role
  })

  console.log('sss',userType)
  

  return (
    <>
      
      <div div className={`${props.sideBarOpen ? 'w-[20%]' : 'w-[5%]'} hidden md:block left-0 absolute h-screen bg-gray-100 duration-300 border-e-2`
      } id='sidebarMain' >
        <div className='top-0 w-[100%] h-[10%] flex '>
          <img src='../images/visitorAppLogo.png' className={`${props.sideBarOpen ? 'h-[60%] ml-10 my-4' : 'h-[30%]'}`}></img>
        </div>
        <ul className='w-[100%] mt-6 flex flex-col gap-4 items-center text-black text-l'>
          {
            sideBarElements.map((data, index) => {
              return (
                data.ut.includes(userType) ?
                  <>
                    {
                      props.sideBarOpen ?

                        <Link to={data.routeLink} className={`focus:bg-gray-300 w-[90%] hover:bg-gray-300 p-2 rounded-lg flex items-center gap-2`} key={data.title} onClick={(e) => {
                          data.title === 'Logout' ?
                            <>
                              {dispatch(logoutUser())}
                            </> :
                            <></>
                        }}>
                          {data.icon}
                          {data.title}
                        </Link>
                        :
                        <Tooltip title={
                          <React.Fragment>
                            <h1 className='text-[15px] m-1'>{data.title}</h1>
                          </React.Fragment>
                        } placement='right' arrow TransitionComponent={Zoom} key={data.title}>
                          <Link to={data.routeLink} className={`w-[80%] justify-center hover:bg-gray-300 p-2 rounded-lg flex items-center gap-2`}>
                            {data.icon}
                          </Link>
                        </Tooltip>
                    }
                  </> :
                  <></>
                
                  
              )
            })
          }
        </ul>
      </div >


      {/* MOBILE DRAWER */}
      <div className='block md:hidden'>
        <div className={`${props.mobileSideBar ? 'left-[-100%]' : 'left-[0%]'} absolute h-[100%] w-[100%] bg-gray-100 z-[2] duration-300`}>
          <div onClick={() => { props.setMobileBar(prev => !prev) }} className='flex items-center justify-end
          p-4'>
            <AiFillCloseCircle size={25}/>
          </div>
          <ul className='w-[100%]  flex flex-col gap-4 items-start justify-start text-black text-l'>
            {
              sideBarElements.map((data, index) => {
                return (
                  <Link to={data.routeLink} className={`w-[90%] hover:bg-gray-300 p-2 rounded-lg flex items-center gap-2  ms-3`} onClick={() => {
                    props.setMobileBar(prev => !prev)
                    data.title === 'Logout' ? dispatch(logoutUser()):<></>
                  }} >
                    {data.icon}
                    <>{data.title}</>
                  </Link>
                )
              })
            }
          </ul>
        </div>
      </div>
    </>
    
  )
}
