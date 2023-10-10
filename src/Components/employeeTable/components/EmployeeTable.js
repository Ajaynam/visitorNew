import React, { useEffect, useState } from 'react'
import Header from '../../ui/component/Header'
import axios from 'axios';
import { LuView } from 'react-icons/lu'
import { FiEdit2 } from 'react-icons/fi'
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi'
import { Tooltip, Zoom } from '@mui/material';
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { BiDownload } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import baseurl from '../../../api/baseurl'
import * as XLSX from 'xlsx'

export default function EmployeeTable() {

  const getEmployeeAPi = `${baseurl}employee/get-all-employee`;
  const searchEmployeeAPi = `${baseurl}employee/search-employee`;


  const elementClass = 'col-span-full md:col-span-1 flex items-start justify-center text-justify';

  const [allEmployeeList, setAllEmployeeList] = useState([]);
  const perPage = 10;
  const [startIndex, setstartIndex] = useState(0)
  const startPage = startIndex * perPage;
  const endPage = startPage + perPage;
  const lastCount = Math.ceil(allEmployeeList.length / perPage);
  console.log('LC : ', lastCount)

  const exportExcelData = () => {
    if (allEmployeeList.length) {
      const worksheet = XLSX.utils.json_to_sheet(allEmployeeList);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "employeeData.csv");
    }
  }

  const getEmployeeList = () => {
    axios.get(getEmployeeAPi)
      .then((response) => {
        console.log(response.data)
        setAllEmployeeList(response.data)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const searchEmployee = (e) => {
    if (e.target.value === '')
      getEmployeeList();
    else {
      axios.post(searchEmployeeAPi, { key: e.target.value })
        .then((response) => {
        setAllEmployeeList(response.data)
        })
        .catch((error) => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    getEmployeeList();
  }, [])


  return (
    <>
      <Header heading={'Employee List'} title={'All Employee'} />

      <div className='mb-2 flex items-center gap-2 justify-between w-full'>

        <div className='flex items-center justify-center gap-2'>
          <BsSearch className='text-gray-500' size={20} />
          <input type='text' placeholder='Search...' className='border-2 outline-none px-1 md:px-5 py-[2px] rounded border-[rgba(0,0,0,0.1)] focus:border-violet-600 focus:border-[2px] resize-none' onChange={(e)=>{searchEmployee(e)}} ></input>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <Link to='/add-employee' className='rounded bg-violet-600 hover:bg-violet-700 px-3 py-1 text-white flex items-center justify-center gap-2'>
            Add employee
            <AiOutlineAppstoreAdd />
          </Link>
          <button onClick={() => { exportExcelData() }} className='rounded bg-violet-600 hover:bg-violet-700 px-3 py-1 text-white flex items-center justify-center gap-2'>
            Export
            <BiDownload />
          </button>
        </div>      
      </div>

      <div className='w-[100%]'>
        <div className='bg-violet-500 grid grid-cols-5 p-2 text-white rounded-lg'>
          <div className={elementClass}><p>Id</p></div>
          <div className={elementClass}><p>Employee Name</p></div>
          <div className={elementClass}><p>Phone</p></div>
          <div className={elementClass}><p>Email</p></div>
          <div className={elementClass}><p>Role</p></div>
        </div>
        {
          allEmployeeList.length ?
            <>
              {
                allEmployeeList.slice(startPage, endPage).map((data, index) => {
                  return (
                    <div className={` grid grid-cols-5 p-2 text-gray-500 ${(index % 2 === 0) ? '' : 'bg-violet-100 rounded-lg'}`}>
                      <div className={elementClass}><p>{data.id}</p></div>
                      <div className={elementClass}><p>{data.hostName}</p></div>
                      <div className={elementClass}><p>{data.hostMobile}</p></div>
                      <div className={elementClass}><p>{data.hostEmail}</p></div>
                      <div className={elementClass}><p>{data.roleName}</p></div>
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
        allEmployeeList.length ?
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
