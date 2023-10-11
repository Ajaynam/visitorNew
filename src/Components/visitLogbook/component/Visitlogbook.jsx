import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { LuView } from 'react-icons/lu'
import { FiEdit2 } from 'react-icons/fi'
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi'
import { Tooltip, Zoom } from '@mui/material';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import Header from '../../ui/component/Header';
import { BsSearch } from 'react-icons/bs'
import * as XLSX from 'xlsx'
import { BiDownload } from 'react-icons/bi'
export default function Visitlogbook() {

  const visitorLogbookAPI = 'http://localhost:8000/visitor/visit-logbook';
  const searchVisitorAPI = 'http://localhost:8000/visitor/search-visitor';

  const elementClass = 'flex items-start justify-center text-justify';

  const [visitorLogbook, setVisitorLogbook] = useState([]);
  const perPage = 10;
  const [startIndex, setstartIndex] = useState(0)
  const startPage = startIndex * perPage;
  const endPage = startPage + perPage;
  const lastCount = Math.ceil(visitorLogbook.length / perPage);
  console.log('LC : ', lastCount)
  
  const getVisitorLogbook = () => {
    axios.get(visitorLogbookAPI)
      .then((response) => {
        console.log(response.data)
        setVisitorLogbook(response.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const searchVisitors = (e) => {
    if (e.target.value === '')
      getVisitorLogbook();
    else {
      axios.post(searchVisitorAPI, { key: e.target.value })
        .then((response) => {
          setVisitorLogbook(response.data)
        })
        .catch((error) => {
        console.log(error)
      })
    }
  }

  const exportExcelData = () => {
    if (visitorLogbook.length) {
      const worksheet = XLSX.utils.json_to_sheet(visitorLogbook);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "visitorLogs.xlsx");
    }
  }

  useEffect(() => {
    getVisitorLogbook();
  },[])
  return (
    <>
      <Header heading={'Visitor Logbook'} title={'All visit logs'} />
      <div className='w-[100%]'>
        <div className='mb-2 flex items-center gap-2 justify-between'>
          <div className='flex items-center justify-center gap-2'>
            <BsSearch className='text-gray-500' size={20} />
            <input type='text' placeholder='Search...' className='border-2 outline-none px-1 md:px-5 py-[2px] rounded border-[rgba(0,0,0,0.1)] focus:border-violet-600 focus:border-[2px] resize-none' onChange={(e) => { searchVisitors(e) }}></input>
          </div>
          <button onClick={() => { exportExcelData() }} className='rounded bg-violet-600 hover:bg-violet-700 px-3 py-1 text-white flex items-center justify-center gap-2'>
            Export
            <BiDownload />
          </button>
        </div>
        <div className='bg-violet-500 grid grid-cols-8 p-2 md:text-md-center text-white rounded-lg'>
          <div className={elementClass}><p>Host</p></div>
          <div className={elementClass}><p>Visitor</p></div>
          <div className={elementClass}><p>Mobile</p></div>
          <div className={elementClass}><p>VID</p></div>
          <div className={elementClass}><p>Created Date</p></div>
          <div className={elementClass}><p>Created Time</p></div>
          <div className={elementClass}><p>Check-In</p></div>
          <div className={elementClass}><p>Check-Out</p></div>
        </div>
        {
          visitorLogbook.length?
            <>
              {
                visitorLogbook.slice(startPage,endPage).map((item, index) => {
                  return (
                    <div className={` overflow-auto grid grid-cols-8 p-2 text-gray-500 ${(index % 2 === 0) ? '' : 'bg-violet-100 rounded-lg'}`} key={index} id={item.visitorId} >
                      <div className={elementClass}><p>{item.hostName}</p></div>
                      <div className={elementClass}><p>{item.visitorName}</p></div>
                      <div className={elementClass}><p>{item.visitorMobile}</p></div>
                      <div className={elementClass}><p>{item.visitorId}</p></div>
                      <div className={elementClass}><p>{item.createdDate.slice(0,10)}</p></div>
                      <div className={elementClass}><p>{item.entryTime}</p></div>
                      {
                        item.status === 'P' ?
                          <>
                            <div className={`${elementClass} text-yellow-500`}><p>Pending</p></div>
                            <div className={`${elementClass} text-yellow-500`}><p>Pending</p></div>
                          </> :<></>
                          
                      }
                      {
                        item.status === 'A' ?
                          <>
                            <div className={`${elementClass} text-green-500`}><p>Accepted</p></div>
                            <div className={`${elementClass} text-yellow-500`}><p>Pending</p></div>
                          </> : <></>

                      }
                      {
                        item.status === 'R' ?
                          <>
                            <div className={`${elementClass} text-red-500`}><p>Rejected</p></div>
                            <div className={`${elementClass} text-red-500`}><p>Rejected</p></div>
                          </> : <></>

                      }
                      {
                        item.status === 'C' ?
                          <>
                            <div className={`${elementClass} text-green-500`}><p>Completed</p></div>
                            <div className={`${elementClass} text-green-500`}><p>Completed</p></div>
                          </> : <></>

                      }
                      {/* <div className='col-span-full md:col-span-1 flex items-start justify-center text-justify gap-3'>
                        <Tooltip title={
                          <React.Fragment>
                            <h1 className='text-[10px]'>View</h1>
                          </React.Fragment>
                        } placement='left' arrow TransitionComponent={Zoom}>
                          <button className='p-[5px] rounded bg-violet-600 hover:bg-violet-700'>
                            <h1 className='text-white'><LuView size={10} /></h1>
                          </button>
                        </Tooltip>
                        <Tooltip title={
                          <React.Fragment>
                            <h1 className='text-[10px]'>Edit</h1>
                          </React.Fragment>
                        } placement='top' arrow TransitionComponent={Zoom}>
                          <button className='p-[5px] rounded bg-green-500 hover:bg-green-700'>
                            <h1 className='text-white'><FiEdit2 size={10} /></h1>
                          </button>
                        </Tooltip>
                        <Tooltip title={
                          <React.Fragment>
                            <h1 className='text-[10px]'>Delete</h1>
                          </React.Fragment>
                        } placement='right' arrow TransitionComponent={Zoom}>
                          <button className='p-[5px] rounded bg-red-500 hover:bg-red-600'>
                            <h1 className='text-white'><MdOutlineDeleteOutline size={10} /></h1>
                          </button>
                        </Tooltip>
                      </div> */}
                    </div>
                  )
                })
              }
            </> :
            // <><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4cec2c69321565.5b7d0cbe75933.gif" alt="" /></>
            <></>
        }
      </div>
      {
        visitorLogbook.length ?
          <div className=' w-[100%] text-violet-700 mt-7 flex items-center justify-center gap-x-5 '>
            <button className='p-1 bg-violet-100 rounded-full' onClick={() => {
              setstartIndex((prev) => {
                if (prev > 0)
                  return prev - 1
                return prev
              })
            }}><BiSkipPrevious size={20} /></button>

            <h1 className='px-2 bg-violet-500 text-white rounded-full h-[40px] w-[40px] flex items-center justify-center'>{startIndex + 1}</h1>

            <button className='p-1 bg-violet-100 rounded-full' onClick={() => {
              setstartIndex((prev) => {
                console.log('PREV : ', prev)
                if (prev < lastCount - 1)
                  return prev + 1
                return prev
              })
            }}><BiSkipNext size={20} /></button>
          </div> :
          <></>
      }
    </>

  )
}
