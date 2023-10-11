import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setName, setMobile, setEmail, setAddress, setGender, setIdtype, setIdnumber, setVisitDate, setCheckInTime, setHost, setPurpose, resetNewVisit } from '../store/newVisitSlice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import Header from '../../ui/component/Header';
import { useNavigate } from 'react-router-dom';
import baseurl from '../../../api/baseurl'
export default function Newinvite() {

    const inputClass = 'border-2 outline-none p-2 rounded mt-2 border-[rgba(0,0,0,0.1)] focus:border-violet-600 focus:border-[2px] resize-none';
    const inputClassEmpty = 'border-2 outline-none p-2 rounded mt-2 border-red-400 focus:border-violet-600 focus:border-[2px] resize-none';

    const newVisitAPI = 'http://localhost:8000/visitor/new-visit';
    const getAllHostApi = `${baseurl}employee/get-hosts`;

    const dispatch = useDispatch();

    const newVisit = useSelector((state) => {

        return state.newVisit;
    })

    const [allHosts,setAllHosts]=useState([])

    const [emptyData, setEmptyData] = useState({
        name: true,
        num: true,
        email: true,
        gender: true,
        idtype: true,
        idnum: true,
        address: true,
        date: true,
        cintime: true,
        host: true,
        purpose: true
    })

    const [labels, setLabels] = useState({
        name: 'Visitor Name',
        number: 'Visitor number',
        email: 'Visitor email',
        gender: 'Select gender',
        idtype: 'Select identity proof',
        idnumber: 'Select identity number',
        address: 'Complete address',
        date: 'Visit date',
        cintime: 'Check-in time',
        couttime: 'Check-out time',
        host: 'Select host',
        purpose: 'Visit purpose'
    })

    const Navigate = useNavigate();

    const executeBuying = () => {
        console.log(newVisit)
        let flag = 1;
        if (newVisit.name === '') {
            setEmptyData(prev => ({ ...prev, name: false }))
            setLabels(prev => ({ ...prev, name: 'Visitor name required !' }))
            flag = 0;
        }
        if (newVisit.mobile === '') {
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
        if (newVisit.identityType === '' || newVisit.identityType === '0') {
            setEmptyData(prev => ({ ...prev, idtype: false }))
            setLabels(prev => ({ ...prev, idtype: 'Select identity type!' }))
            flag = 0;
        }
        if (newVisit.identityNumber === '') {
            setEmptyData(prev => ({ ...prev, idnum: false }))
            setLabels(prev => ({ ...prev, idnumber: 'Identity number required!' }))
            flag = 0;
        }
        if (newVisit.address === '') {
            setEmptyData(prev => ({ ...prev, address: false }))
            setLabels(prev => ({ ...prev, address: 'Address required!' }))
            flag = 0;
        }
        if (newVisit.visitDate === '') {
            setEmptyData(prev => ({ ...prev, date: false }))
            setLabels(prev => ({ ...prev, date: 'Date required!' }))
            flag = 0;
        }
        if (newVisit.checkInTime === '') {
            setEmptyData(prev => ({ ...prev, cintime: false }))
            setLabels(prev => ({ ...prev, cintime: 'Check-In time required!' }))
            flag = 0;
        }
        // if (newVisit.couttime === '') {
        //     setEmptyData(prev => ({ ...prev, couttime: false }))
        //     setLabels(prev => ({ ...prev, couttime: 'Check-Out time required!' }))
        //     flag = 0;
        // }
        if (newVisit.host === '' || newVisit.host==='0') {
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
            axios.post(newVisitAPI, newVisit)
                .then((response) => {
                    console.log(response.data)
                    if (response.data.success) {
                        toast.success('Visitor entry created')
                        dispatch(resetNewVisit());
                        setTimeout(() => {
                            Navigate('/visitor-card', { state: { cardId: response.data.cardId } })
                        },3000)
                        
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    const resetEmpty = () => {
        setEmptyData({
            name: true,
            num: true,
            email: true,
            gender: true,
            idtype: true,
            idnum: true,
            address: true,
            date: true,
            cintime: true,
            couttime: true,
            host: true,
            purpose: true
        })
        setLabels({
            name: 'Visitor ame',
            number: 'Visitor number',
            email: 'Visitor email',
            gender: 'Select gender',
            idtype: 'Select identity proof',
            idnumber: 'Select identity number',
            address: 'Complete address',
            date: 'Visit date',
            cintime: 'Check-in time',
            couttime: 'Check-out time',
            host: 'Select host',
            purpose: 'Visit purpose'
        })
    }


    //   const [existingUser, setExistingUser] = useState([]);

    //   const fetchUsers = (e) => {
    //     if (e.target.value === '') {
    //       setExistingUser([])
    //       dispatch(resetNewBuying())
    //     }
    //     else {
    //       axios.post(checkUserAPI, { key: e.target.value })
    //         .then((response) => {
    //           console.log(response.data)
    //           setExistingUser(response.data)
    //         })
    //         .catch((error) => {
    //           console.log(error.message)
    //         })
    //     }
    //   }

    const getAllHost = () => {
        axios.get(getAllHostApi)
            .then((response) => {
                console.log(response.data)
                setAllHosts(response.data)
            })
            .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllHost();
    },[])

    return (
        <>
            <ToastContainer autoClose={2000} />
            <Header heading={'Add new entry'} title={'Fill information for creating new enrty'} />
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
                    {/* <div className='grid absolute bg-white w-[100] mt-20 max-h-60 overflow-auto shadow-xl border rounded'>
                                {
                                    existingUser.map((item, index) => {
                                        return (
                                            <p className='hover:bg-violet-200 px-6 py-1 m-2 rounded hover:cursor-pointer' id='index' onClick={(e) => {
                                                dispatch(setName(item.name))
                                                dispatch(setMobile(item.number))
                                                dispatch(setAddress(item.address))
                                                dispatch(setBuyerId(Number(item.id)))
                                                setExistingUser([])
                                            }} >{item.name}</p>
                                        )
                                    })
                                }
                            </div> */}
                </div>

                {/* Visitor Number */}
                <div className='flex flex-col'>
                    <label htmlFor='visitorNumber' className={`${emptyData.num ? 'text-black' : 'text-red-500'}`}>{labels.number}</label>
                    <input type='number' id='visitorNumber' className={emptyData.num ? inputClass : inputClassEmpty} placeholder='Visitor number...' value={newVisit.mobile} onChange={(e) => { dispatch(setMobile(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div>

                {/* Visitor Email */}
                <div className='flex flex-col'>
                    <label htmlFor='visitorEmail' className={`${emptyData.email ? 'text-black' : 'text-red-500'}`}>{labels.email}</label>
                    <input type='text' id='visitorEmail' className={emptyData.email ? inputClass : inputClassEmpty} placeholder='Visitors email...' value={newVisit.email} onChange={(e) => { dispatch(setEmail(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div>

                {/* Gender */}
                <div className='flex flex-col'>
                    <label htmlFor='visitorGender' className={`${emptyData.gender ? 'text-black' : 'text-red-500'}`}>{labels.gender}</label>
                    <select id='visitorGender' className={emptyData.gender ? inputClass : inputClassEmpty} onChange={(e) => { dispatch(setGender(e.target.value)) }} onClick={(e) => { resetEmpty() }}>
                        <option value='0'>Select Gender</option>
                        <option value='M'>Male</option>
                        <option value='F'>Female</option>
                        <option value='O'>Other</option>
                    </select>
                </div>

                {/* Identity type */}
                <div className='flex flex-col'>
                    <label htmlFor='identityType' className={`${emptyData.idtype ? 'text-black' : 'text-red-500'}`}>{labels.idtype}</label>
                    <select id='identityType' onChange={(e) => { dispatch(setIdtype(e.target.value)) }} onClick={() => { resetEmpty() }} className={emptyData.idtype ? inputClass : inputClassEmpty}>
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
                    <input type='text' id='identityNumber' className={emptyData.idnum ? inputClass : inputClassEmpty} placeholder='Identity number...' value={newVisit.identityNumber} onChange={(e) => { dispatch(setIdnumber(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div>
            </div>



            {/* Visitor's details */}
            <div className='grid w-[100%] md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 p-6 border rounded-lg mb-8'>

                <div className='col-span-full text-lg font-semibold'>
                    <h1 className='text-black'>Visitor's address details</h1>
                </div>

                {/* Visitor Address */}
                <div className='flex flex-col col-span-full'>
                    <label htmlFor='purpose' className={`${emptyData.address ? 'text-black' : 'text-red-500'}`}>{labels.address}</label>
                    <textarea id='purpose' className={`${emptyData.address ? inputClass : inputClassEmpty}  h-32`} placeholder="Visitor's address..." value={newVisit.address} onClick={() => { resetEmpty() }} onChange={(e) => { dispatch(setAddress(e.target.value)) }}></textarea>
                </div>
            </div>




            {/* Visitataion details */}
            <div className='grid w-[100%] md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 p-6 border rounded-lg mb-8'>

                <div className='col-span-full text-lg font-semibold'>
                    <h1 className='text-black'>Visit details</h1>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor='date' className={`${emptyData.date ? 'text-black' : 'text-red-500'}`}>{labels.date}</label>
                    <input type='date' id='date' className={emptyData.date ? inputClass : inputClassEmpty} placeholder='Visit date...' value={newVisit.visitDate} onChange={(e) => { dispatch(setVisitDate(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor='cintime' className={`${emptyData.cintime ? 'text-black' : 'text-red-500'}`}>{labels.cintime}</label>
                    <input type='time' id='cintime' className={emptyData.cintime ? inputClass : inputClassEmpty} placeholder='Visit date...' value={newVisit.checkInTime} onChange={(e) => { dispatch(setCheckInTime(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div>

                {/* <div className='flex flex-col'>
                    <label htmlFor='couttime' className={`${emptyData.couttime ? 'text-black' : 'text-red-500'}`}>{labels.couttime}</label>
                    <input type='time' id='couttime' className={emptyData.couttime ? inputClass : inputClassEmpty} placeholder='Visit date...' value={newVisit.country} onChange={(e) => { dispatch(setAddress(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div> */}

                <div className='flex flex-col'>
                    <label htmlFor='host' className={`${emptyData.host ? 'text-black' : 'text-red-500'}`}>{labels.host}</label>
                    <select id='host' className={emptyData.host ? inputClass : inputClassEmpty} onChange={(e) => {
                        dispatch(setHost(e.target.value))
                    }} onClick={(e) => {
                        console.log(e.target.value)
                        resetEmpty()
                    }}>
                        <option value='0'>Select host</option>
                        {
                            allHosts.map((host, index) => {
                                return (
                                    <option value ={host.id} key={index}>{host.hostName}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className='flex flex-col col-span-full'>
                    <label htmlFor='purpose' className={`${emptyData.purpose ? 'text-black' : 'text-red-500'}`}>{labels.purpose}</label>
                    <textarea id='purpose' className={`${emptyData.purpose ? inputClass : inputClassEmpty}  h-32`} placeholder='Visit purpose...' value={newVisit.purpose} onClick={() => { resetEmpty() }} onChange={(e) => { dispatch(setPurpose(e.target.value)) }} ></textarea>
                </div>

            </div>

            <div className='grid grid-cols-1 w-full mb-10'>
                <div className='flex item-center justify-center md:justify-start gap-3'>
                    <button className='text-white p-2 w-[40%] md:w-[15%] rounded bg-violet-600 hover:bg-violet-700' onClick={() => { executeBuying() }}>
                        <h1 className='flex items-center justify-center gap-3'>Create Invite</h1></button>
                    
                    <button className='text-violet-600 bg-white p-2 w-[40%] md:w-[15%] border border-violet-600 rounded hover:text-white hover:border-red-500 hover:bg-red-500' onClick={() => {
                        resetEmpty()
                        // $('#productCategory').val('0')
                        dispatch(resetNewVisit())
                    }} >
                        <h1 className='flex items-center justify-center gap-3'>Clear</h1>
                    </button>
                </div>

            </div>


        </>
    )
}