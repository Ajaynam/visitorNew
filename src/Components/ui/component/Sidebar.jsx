import { Tooltip, Zoom } from '@mui/material'
import React from 'react'
import { AiFillAppstore, AiFillCloseCircle } from 'react-icons/ai'
import { MdInsertInvitation } from 'react-icons/md'
import {  RiLogoutCircleRFill } from 'react-icons/ri'
import { FaListAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Sidebar(props) {

  const sideBarElements = [
    {
      title: 'Dashboard',
      routeLink: 'dashboard',
      status:false,
      icon:<AiFillAppstore size={22}/>
    },
    {
      title: 'Visitor Logbook',
      routeLink: 'visit-logbook',
      status: false,
      icon: <FaListAlt size={20} />

    },
    {
      title: 'New Invite',
      routeLink: 'new-invite',
      status: false,
      icon: <MdInsertInvitation size={23} />

    }
    ,
    {
      title: 'Logout',
      routeLink: '',
      status: false,
      icon: <RiLogoutCircleRFill size={23} />

    }
  ]

  return (
    <>
      {/* DESKTOP DRAWER */}
      <div div className={`${props.sideBarOpen ? 'w-[20%]' : 'w-[5%]'} hidden md:block left-0 absolute h-screen bg-gray-100 duration-300 border-e-2`
      } id='sidebarMain' >
        <div className='top-0 w-[100%] h-[10%] flex items-center justify-center'>
          <img src='../images/visitorAppLogo.png' className={`${props.sideBarOpen ? 'h-[90%]' : 'h-[30%]'}`}></img>
        </div>
        <ul className='w-[100%] flex flex-col gap-4 items-center text-black text-l'>
          {
            sideBarElements.map((data, index) => {
              return (
                props.sideBarOpen ?
                  
                  <Link to={data.routeLink} className={`focus:bg-gray-300 w-[90%] hover:bg-gray-300 p-2 rounded-lg flex items-center gap-2`} key={data.title} onClick={(e) => {
                    sideBarElements[index].status = true
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
          <ul className='w-[100%] flex flex-col gap-4 items-start justify-start text-black text-l'>
            {
              sideBarElements.map((data, index) => {
                return (
                  <Link to={data.routeLink} className={`w-[90%] hover:bg-gray-300 p-2 rounded-lg flex items-center gap-2  ms-3`} onClick={() => { props.setMobileBar(prev => !prev) }}>
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
