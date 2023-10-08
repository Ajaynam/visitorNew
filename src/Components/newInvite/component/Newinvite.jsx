import React, { useState } from 'react'
import Header from '../../ui/component/Header'
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery'
import { BiSolidCartAdd } from 'react-icons/bi' 
import { AiOutlineReload } from 'react-icons/ai'
import { setName, setNumber, setEmail, setGender, setIdtype, setIdnumber, resetNewBuying } from '../store/newVisitSlice'
export default function Newinvite() {

  const inputClass = 'border-2 outline-none p-2 rounded mt-2 border-[rgba(0,0,0,0.1)] focus:border-violet-600 focus:border-[2px] resize-none';
  const inputClassEmpty = 'border-2 outline-none p-2 rounded mt-2 border-red-400 focus:border-violet-600 focus:border-[2px] resize-none';

  const newVisitAPI = 'http://localhost:8000/store/new-buying';
  const checkUserAPI = 'http://localhost:8000/data/check-user';

  const dispatch = useDispatch();

  const newVisit = useSelector((state) => {
    console.log(state)
    return state.newVisit;
  })

  const [emptyData, setEmptyData] = useState({
    name: true,
    num: true,
    email: true,
    gender: true,
    idtyp: true,
    idnum: true,
    hnumber: true,
    floor: true,
    building:true,
    landmark: true,
    village: true,
    pincode: true,
    state: true,
    country: true,
    date: true,
    cintime: true,
    couttime: true,
    host: true,
    purpose:true
  })

  const [labels, setLabels] = useState({
    name: 'Visitor name',
    number: 'Visitor number',
    email: 'Visitor email',
    gender: 'Select gender',
    idtype: 'Select identity proof',
    idnumber: 'Select identity number',
    hnumber: 'House number',
    floor: 'Floor number',
    building: 'Building/Apartment/Society',
    landmark: 'Landmark',
    village: 'Village/Town/City',
    pincode: 'Pincode',
    state: 'State',
    country: 'Country',
    date: 'Visit date',
    cintime: 'Check-in time',
    couttime: 'Check-out time',
    host: 'Select host',
    purpose:'Visit purpose'
  })


  const executeBuying = () => {
    console.log(newVisit)
    let flag = 1;
    if (newVisit.name === '') {
      setEmptyData(prev => ({ ...prev, name: false }))
      setLabels(prev => ({ ...prev, name: 'Visitor name required !' }))
      flag = 0;
    }
    if (newVisit.number === '') {
      setEmptyData(prev => ({ ...prev, num: false }))
      setLabels(prev => ({ ...prev, number: 'Visitor number required!' }))
      flag = 0;
    }
    if (newVisit.email === '') {
      setEmptyData(prev => ({ ...prev, email: false }))
      setLabels(prev => ({ ...prev, email: 'Visitor address required!' }))
      flag = 0;
    }
    if (newVisit.gender === '') {
      setEmptyData(prev => ({ ...prev, gender: false }))
      setLabels(prev => ({ ...prev, gender: 'Gender required!' }))
      flag = 0;
    }
    if (newVisit.idtype === '') {
      setEmptyData(prev => ({ ...prev, idtyp: false }))
      setLabels(prev => ({ ...prev, idtype: 'Select identity type!' }))
      flag = 0;
    }
    if (newVisit.idnumber === '') {
      setEmptyData(prev => ({ ...prev, idnum: false }))
      setLabels(prev => ({ ...prev, idnumber: 'Identity number required!' }))
      flag = 0;
    }
    if (newVisit.hnumber === '') {
      setEmptyData(prev => ({ ...prev, hnumber: false }))
      setLabels(prev => ({ ...prev, hnumber: 'House number required!' }))
      flag = 0;
    }
    if (newVisit.floor === '') {
      setEmptyData(prev => ({ ...prev, floor: false }))
      setLabels(prev => ({ ...prev, floor: 'Floor number required!' }))
      flag = 0;
    }
    if (newVisit.building === '') {
      setEmptyData(prev => ({ ...prev, building: false }))
      setLabels(prev => ({ ...prev, building: 'Building name required!' }))
      flag = 0;
    }
    if (newVisit.village === '') {
      setEmptyData(prev => ({ ...prev, village: false }))
      setLabels(prev => ({ ...prev, village: 'Village/Cityy/Town required!' }))
      flag = 0;
    }
    if (newVisit.landmark === '') {
      setEmptyData(prev => ({ ...prev, landmark: false }))
      setLabels(prev => ({ ...prev, landmark: 'Landmark required!' }))
      flag = 0;
    }
    if (newVisit.pincode === '') {
      setEmptyData(prev => ({ ...prev, pincode: false }))
      setLabels(prev => ({ ...prev, pincode: 'Pincode required!' }))
      flag = 0;
    }
    if (newVisit.state === '') {
      setEmptyData(prev => ({ ...prev, state: false }))
      setLabels(prev => ({ ...prev, state: 'State required!' }))
      flag = 0;
    }
    if (newVisit.country === '') {
      setEmptyData(prev => ({ ...prev, country: false }))
      setLabels(prev => ({ ...prev, country: 'Country required!' }))
      flag = 0;
    }
    if (newVisit.date === '') {
      setEmptyData(prev => ({ ...prev, date: false }))
      setLabels(prev => ({ ...prev, date: 'Date required!' }))
      flag = 0;
    }
    if (newVisit.cintime === '') {
      setEmptyData(prev => ({ ...prev, cintime: false }))
      setLabels(prev => ({ ...prev, cintime: 'Check-In time required!' }))
      flag = 0;
    }
    if (newVisit.couttime === '') {
      setEmptyData(prev => ({ ...prev, couttime: false }))
      setLabels(prev => ({ ...prev, couttime: 'Check-Out time required!' }))
      flag = 0;
    }
    if (newVisit.host === '') {
      setEmptyData(prev => ({ ...prev, host: false }))
      setLabels(prev => ({ ...prev, host: 'Host name required!' }))
      flag = 0;
    }
    if (newVisit.purpose === '') {
      setEmptyData(prev => ({ ...prev, purpose: false }))
      setLabels(prev => ({ ...prev, purpose: 'Visit purpose required!' }))
      flag = 0;
    }
    if (flag) {
      console.log(newVisit)
      // dispatch(executeNewBuying(newVisit))
      //   .then((response) => {
      //     console.log('NEWBUYING DB RESPONSE : ', response)
      //     if (response.payload.success === true) {
      //       dispatch(resetNewBuying());
      //       $('#productCategory').val('0')
      //       toast.success('Livestock added')
      //     } else if (response.payload.success === false) {
      //       setEmptyData(prev => ({ ...prev, num: false }))
      //       setLabels(prev => ({ ...prev, number: response.payload.message }))
      //     }
      //   })
      //   .catch((error) => {
      //     console.log('ERROR AT NEWBUYING API : ', error)
      //   })
    }
  }

  const resetEmpty = () => {
    setEmptyData({
      name: true,
      num: true,
      email: true,
      gender: true,
      idtyp: true,
      idnum: true,
      hnumber: true,
      floor: true,
      building: true,
      landmark: true,
      village: true,
      pincode: true,
      state: true,
      country: true,
      date: true,
      cintime: true,
      couttime: true,
      host: true,
      purpose: true
    })
    setLabels({
      name: 'Visitor name',
      number: 'Visitor number',
      email: 'Visitor email',
      gender: 'Select gender',
      idtype: 'Select identity proof',
      idnumber: 'Select identity number',
      hnumber: 'House number',
      floor: 'Floor number',
      building: 'Building/Apartment/Society',
      landmark: 'Landmark',
      village: 'Village/Town/City',
      pincode: 'Pincode',
      state: 'State',
      country: 'Country',
      date: 'Visit date',
      cintime: 'Check-in time',
      couttime: 'Check-out time',
      host: 'Select host',
      purpose: 'Visit purpose'
    })
  }


  const [existingUser, setExistingUser] = useState([]);

  const fetchUsers = (e) => {
    if (e.target.value === '') {
      setExistingUser([])
      dispatch(resetNewBuying())
    }
    else {
      axios.post(checkUserAPI, { key: e.target.value })
        .then((response) => {
          console.log(response.data)
          setExistingUser(response.data)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }

  return (
    <>
      <Header heading={'New Invite'} title={'Fill information for creating new invite'} />
      {/* <div className='absolute bg-[rgba(0,0,0,0.5)] h-[100%] w-[100%] top-[0] left-0'>
        ...
        </div> */}
      {
        newVisit.loading ?
          <>
            <div className='bg-[rgba(255,255,255,0.7)] absolute top-0 left-0 h-[100%]'>

            </div>
          </> :
          <></>
      }

      <div className='grid w-[100%] lg:grid-cols-3 md:grid-cols-2 gap-5 gap-y-10 p-6 border-2 rounded-lg mb-8'>
        <div className='col-span-full text-lg font-semibold'>
          <h1 className='text-black'>Visitor's personal details</h1>
        </div>

        {/* Visitor Name */}
        <div className='flex flex-col'>
          <label htmlFor='visitorName' className={`${emptyData.name ? 'text-black' : 'text-red-500'}`}>{labels.name}</label>
          <input type='text' id='visitorName' className={emptyData.name ? inputClass : inputClassEmpty} placeholder='Visitor name...' value={newVisit.name} onChange={(e) => {
            // fetchUsers(e)
            dispatch(setName(e.target.value))
          }} onClick={() => { resetEmpty() }}></input>
          <div className='grid absolute bg-white w-[100] mt-20 max-h-60 overflow-auto shadow-xl border rounded'>
            {
              existingUser.map((item, index) => {
                return (
                  <p className='hover:bg-violet-200 px-6 py-1 m-2 rounded hover:cursor-pointer' id='index' onClick={(e) => {
                    dispatch(setName(item.name))
                    dispatch(setNumber(item.number))
                    dispatch(setAddress(item.address))
                    dispatch(setBuyerId(Number(item.id)))
                    setExistingUser([])
                  }} >{item.name}</p>
                )
              })
            }
          </div>
        </div>

        {/* Visitor Number */}
        <div className='flex flex-col'>
          <label htmlFor='visitorNumber' className={`${emptyData.num ? 'text-black' : 'text-red-500'}`}>{labels.number}</label>
          <input type='number' id='visitorNumber' className={emptyData.num ? inputClass : inputClassEmpty} placeholder='Visitor number...' value={newVisit.number} onChange={(e) => { dispatch(setNumber(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Visitor Email */}
        <div className='flex flex-col'>
          <label htmlFor='visitorEmail' className={`${emptyData.email ? 'text-black' : 'text-red-500'}`}>{labels.email}</label>
          <input type='text' id='visitorEmail' className={emptyData.email ? inputClass : inputClassEmpty} placeholder='Visitors email...' value={newVisit.email} onChange={(e) => { dispatch(setEmail(e.target.value)) }} onClick={() => {resetEmpty()}}></input>
        </div>

        {/* Gender */}
        <div className='flex flex-col'>
          <label htmlFor='visitorGender' className={`${emptyData.gender ? 'text-black' : 'text-red-500'}`}>{labels.gender}</label>
          <select type='text' id='visitorGender' className={emptyData.gender ? inputClass : inputClassEmpty} onChange={(e) => {
            dispatch(setGender(e.target.value))
          }} onClick={(e) => {
            console.log(e.target.value)
            resetEmpty()
          }}>
            <option value='0'>Select Gender</option>
            <option value='1'>Male</option>
            <option value='2'>Female</option>
            <option value='3'>Other</option>
          </select>
        </div>
        
        {/* Identity type */}
        <div className='flex flex-col'>
          <label htmlFor='identityType' className={`${emptyData.idtyp ? 'text-black' : 'text-red-500'}`}>{labels.idtype}</label>
          <select type='text' id='identityType' className={emptyData.idtyp ? inputClass : inputClassEmpty} onChange={(e) => {
            dispatch(setIdtype(e.target.value))
          }} onClick={(e) => {
            console.log(e.target.value)
            resetEmpty()
          }}>
            <option value='0'>Select identity type</option>
            <option value='1' className='hover:bg-red-500'>Type 1</option>
            <option value='2'>Type 2</option>
            <option value='3'>Type 3</option>
            <option value='4'>Type 4</option>
            <option value='5'>Type 5</option>
          </select>
        </div>

        {/* Identity number */}
        <div className='flex flex-col'>
          <label htmlFor='identityNumber' className={`${emptyData.idnum ? 'text-black' : 'text-red-500'}`}>{labels.idnumber}</label>
          <input type='number' id='identityNumber' className={emptyData.idnum ? inputClass : inputClassEmpty} placeholder='Identity number...' value={newVisit.idnumber} onChange={(e) => { dispatch(setIdnumber(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>
      </div>











      {/* Visitor's details */}
      <div className='grid w-[100%] md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 p-6 border rounded-lg mb-8'>

        <div className='col-span-full text-lg font-semibold'>
          <h1 className='text-black'>Visitor's address details</h1>
        </div>

        {/* Visitor Name */}
        <div className='flex flex-col'>
          <label htmlFor='houseNumber' className={`${emptyData.hnumber ? 'text-black' : 'text-red-500'}`}>{labels.hnumber}</label>
          <input type='text' id='houseNumber' className={emptyData.hnumber ? inputClass : inputClassEmpty} placeholder='House number...' value={newVisit.name} onChange={(e) => {
            fetchUsers(e)
            dispatch(setName(e.target.value))
          }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Visitor Number */}
        <div className='flex flex-col'>
          <label htmlFor='floor' className={`${emptyData.floor ? 'text-black' : 'text-red-500'}`}>{labels.floor}</label>
          <input type='text' id='floor' className={emptyData.floor ? inputClass : inputClassEmpty} placeholder='Floor number...' value={newVisit.number} onChange={(e) => { dispatch(setNumber(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Visitor Address */}
        <div className='flex flex-col'>
          <label htmlFor='building' className={`${emptyData.building ? 'text-black' : 'text-red-500'}`}>{labels.building}</label>
          <input type='text' id='building' className={emptyData.building ? inputClass : inputClassEmpty} placeholder='Building...' value={newVisit.address} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Visitor Address */}
        <div className='flex flex-col'>
          <label htmlFor='landmark' className={`${emptyData.landmark ? 'text-black' : 'text-red-500'}`}>{labels.landmark}</label>
          <input type='text' id='landmark' className={emptyData.landmark ? inputClass : inputClassEmpty} placeholder='Nearby landmark...' value={newVisit.address} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Visitor Address */}
        <div className='flex flex-col'>
          <label htmlFor='village' className={`${emptyData.village ? 'text-black' : 'text-red-500'}`}>{labels.village}</label>
          <input type='text' id='village' className={emptyData.landmark ? inputClass : inputClassEmpty} placeholder='Village/town/city...' value={newVisit.address} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Visitor Address */}
        <div className='flex flex-col'>
          <label htmlFor='pincode' className={`${emptyData.pincode ? 'text-black' : 'text-red-500'}`}>{labels.pincode}</label>
          <input type='text' id='pincode' className={emptyData.pincode ? inputClass : inputClassEmpty} placeholder='Pincode...' value={newVisit.address} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Visitor Address */}
        <div className='flex flex-col'>
          <label htmlFor='state' className={`${emptyData.state ? 'text-black' : 'text-red-500'}`}>{labels.state}</label>
          <input type='text' id='state' className={emptyData.state ? inputClass : inputClassEmpty} placeholder='State...' value={newVisit.address} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        {/* Visitor Address */}
        <div className='flex flex-col'>
          <label htmlFor='country' className={`${emptyData.country ? 'text-black' : 'text-red-500'}`}>{labels.country}</label>
          <input type='text' id='country' className={emptyData.country ? inputClass : inputClassEmpty} placeholder='Country...' value={newVisit.country} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>
      </div>














      {/* Visitataion details */}
      <div className='grid w-[100%] md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 p-6 border rounded-lg mb-8'>

        <div className='col-span-full text-lg font-semibold'>
          <h1 className='text-black'>Visit details</h1>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='date' className={`${emptyData.date ? 'text-black' : 'text-red-500'}`}>{labels.date}</label>
          <input type='date' id='date' className={emptyData.date ? inputClass : inputClassEmpty} placeholder='Visit date...' value={newVisit.country} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='cintime' className={`${emptyData.cintime ? 'text-black' : 'text-red-500'}`}>{labels.cintime}</label>
          <input type='time' id='cintime' className={emptyData.cintime ? inputClass : inputClassEmpty} placeholder='Visit date...' value={newVisit.country} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='couttime' className={`${emptyData.couttime ? 'text-black' : 'text-red-500'}`}>{labels.couttime}</label>
          <input type='time' id='couttime' className={emptyData.couttime ? inputClass : inputClassEmpty} placeholder='Visit date...' value={newVisit.country} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='host' className={`${emptyData.host ? 'text-black' : 'text-red-500'}`}>{labels.host}</label>
          <select id='host' className={emptyData.host ? inputClass : inputClassEmpty} onChange={(e) => {
            dispatch(setIdtype(e.target.value))
          }} onClick={(e) => {
            console.log(e.target.value)
            resetEmpty()
          }}>
            <option value='0'>Select host</option>
            <option value='1' className='hover:bg-red-500'>Type 1</option>
            <option value='2'>Type 2</option>
            <option value='3'>Type 3</option>
            <option value='4'>Type 4</option>
            <option value='5'>Type 5</option>
          </select>
        </div>

        <div className='flex flex-col col-span-full'>
          <label htmlFor='purpose' className={`${emptyData.purpose ? 'text-black' : 'text-red-500'}`}>{labels.purpose}</label>
          <textarea id='purpose' className={`${emptyData.purpose ? inputClass : inputClassEmpty}  h-40`} placeholder='Visit purpose...' value={newVisit.country}  onClick={() => { resetEmpty() }}></textarea>
        </div>
        
      </div>

      <div className='grid grid-cols-1 w-full mb-10'>
        <div className='flex item-center justify-center md:justify-start gap-3'>
          <button className='text-white p-2 w-[15%] rounded bg-violet-600 hover:bg-violet-700' onClick={() => { executeBuying() }}>
            <h1 className='flex items-center justify-center gap-3'>BUY<BiSolidCartAdd size={20} /></h1></button>
          <ToastContainer autoClose={2000} />
          <button className='text-violet-600 bg-white p-2 w-[15%] border border-violet-600 rounded hover:text-white hover:border-red-500 hover:bg-red-500' onClick={() => {
            resetEmpty()
            $('#productCategory').val('0')
            dispatch(resetNewBuying())
          }} >
            <h1 className='flex items-center justify-center gap-3'>CLEAR<AiOutlineReload /></h1>
          </button>
        </div>
        
      </div>


    </>
  )
}
