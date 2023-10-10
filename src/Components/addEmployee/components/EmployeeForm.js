import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setName, setMobile, setEmail, setAddress, setGender, setPassword, setRePassword, setRole, resetNewEmp } from '../store/employeeSlice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react';
import Header from '../../ui/component/Header';
import baseurl from '../../../api/baseurl';
import { useNavigate } from 'react-router-dom';
export default function EmployeeForm() {
    const Navigate = useNavigate();
    const inputClass = 'border-2 outline-none p-2 rounded mt-2 border-[rgba(0,0,0,0.1)] focus:border-violet-600 focus:border-[2px] resize-none';
    const inputClassEmpty = 'border-2 outline-none p-2 rounded mt-2 border-red-400 focus:border-violet-600 focus:border-[2px] resize-none';

    const getOptionsAPI = `${baseurl}admin/employee-options`;
    const addNewEmployee=`${baseurl}employee/add-new-employee`

    const dispatch = useDispatch();

    const newEmployee = useSelector((state) => {
        return state.newEmployee;
    })

    const [emptyData, setEmptyData] = useState({
        name: true,
        num: true,
        email: true,
        password: true,
        rpassword:true,
        gender: true,
        address: true,
        department: true,
        role: true,
    })

    const [labels, setLabels] = useState({
        name: 'Employee Name',
        number: 'Contact number',
        email: 'Email',
        password: 'Password',
        rpassword:'Re-enter password',
        gender: 'Select gender',
        address: 'Complete address',
        department: 'Select department',
        role: 'Select role'
    })


    const executeAddingEmployee = () => {
        console.log(newEmployee)
        let flag = 1;
        if (newEmployee.hostName === '') {
            setEmptyData(prev => ({ ...prev, name: false }))
            setLabels(prev => ({ ...prev, name: 'Name required !' }))
            flag = 0;
        }
        if (newEmployee.hostMobile === '') {
            setEmptyData(prev => ({ ...prev, num: false }))
            setLabels(prev => ({ ...prev, number: 'Number required !' }))
            flag = 0;
        }
        if (newEmployee.hostEmail === '') {
            setEmptyData(prev => ({ ...prev, email: false }))
            setLabels(prev => ({ ...prev, email: 'Address required !' }))
            flag = 0;
        }
        if (newEmployee.hostGender === '' || newEmployee.hostGender === '0') {
            setEmptyData(prev => ({ ...prev, gender: false }))
            setLabels(prev => ({ ...prev, gender: 'Gender required !' }))
            flag = 0;
        }
        if (newEmployee.hostAddress === '') {
            setEmptyData(prev => ({ ...prev, address: false }))
            setLabels(prev => ({ ...prev, address: 'Address required !' }))
            flag = 0;
        }
        if (newEmployee.hostPassword === '') {
            setEmptyData(prev => ({ ...prev, password: false }))
            setLabels(prev => ({ ...prev, password: 'Password required !' }))
            flag = 0;
        }
        if (newEmployee.hostRePassword === '') {
            setEmptyData(prev => ({ ...prev, rpassword: false }))
            setLabels(prev => ({ ...prev, rpassword: 'Re-enter password !' }))
            flag = 0;
        }
        if (newEmployee.hostPassword !== newEmployee.hostRePassword) {
            setEmptyData(prev => ({ ...prev, rpassword: false, password: false }))
            setLabels(prev => ({ ...prev, password: 'Password mismatched !', rpassword: 'Password mismatched !' }))
            flag = 0;
        }
        // if (newEmployee.departmentId === '' || newEmployee.departmentId === '0') {
        //     setEmptyData(prev => ({ ...prev, department: false }))
        //     setLabels(prev => ({ ...prev, department: 'Department required !' }))
        //     flag = 0;
        // }
        if (newEmployee.roleId === '' || newEmployee.roleId === '0') {
            setEmptyData(prev => ({ ...prev, role: false }))
            setLabels(prev => ({ ...prev, role: 'Role required !' }))
            flag = 0;
        }
        if (flag) {
            console.log(newEmployee)
            axios.post(addNewEmployee, newEmployee)
                .then((response) => {
                    if (response.data.success) {
                        toast.success('Staff added successfully')
                        dispatch(resetNewEmp());
                        setTimeout(() => {
                            Navigate('/employee-table')
                        }, 3000)

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
            password: true,
            rpassword: true,
            gender: true,
            address: true,
            department: true,
            role: true,
        })
        setLabels({
            name: 'Employee Name',
            number: 'Contact number',
            email: 'Email',
            password: 'Password',
            rpassword: 'Re-enter password',
            gender: 'Select gender',
            address: 'Complete address',
            department: 'Select department',
            role: 'Select role'
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

    const [employeeOptions, setEmployeeOptions] = useState({
        departments: [],
        roles:[]
    })

    const getOptions = () => {
        axios.get(getOptionsAPI)
            .then((response) => {
                // console.log(response)
                setEmployeeOptions({departments:response.data[0],roles:response.data[1]})
            })
            .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getOptions();
    }, [])

    return (
        <>
            <ToastContainer autoClose={2000} />
            <Header heading={'Add New Employee'} title={'Fill information for creating new Employee'} />
            <div className='grid w-[100%] lg:grid-cols-3 md:grid-cols-2 gap-5 gap-y-10 p-6 border-2 rounded-lg mb-8'>
                <div className='col-span-full text-lg font-semibold'>
                    <h1 className='text-black'>Employee personal details</h1>
                </div>

                {/* Visitor Name */}
                <div className='flex flex-col'>
                    <label htmlFor='visitorName' className={`${emptyData.name ? 'text-black' : 'text-red-500'}`}>{labels.name}</label>
                    <input type='text' id='visitorName' className={emptyData.name ? inputClass : inputClassEmpty} placeholder='Visitor name...' value={newEmployee.hostName} onChange={(e) => {
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
                    <input type='number' id='visitorNumber' className={emptyData.num ? inputClass : inputClassEmpty} placeholder='Visitor number...' value={newEmployee.hostMobile} onChange={(e) => { dispatch(setMobile(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div>

                {/* Visitor Email */}
                <div className='flex flex-col'>
                    <label htmlFor='visitorEmail' className={`${emptyData.email ? 'text-black' : 'text-red-500'}`}>{labels.email}</label>
                    <input type='text' id='visitorEmail' className={emptyData.email ? inputClass : inputClassEmpty} placeholder='Visitors email...' value={newEmployee.hostEmail} onChange={(e) => { dispatch(setEmail(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
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

                {/* Department */}
                {/* <div className='flex flex-col'>
                    <label htmlFor='employeeDepartment' className={`${emptyData.department ? 'text-black' : 'text-red-500'}`}>{labels.department}</label>
                    <select id='employeeDepartment' className={emptyData.department ? inputClass : inputClassEmpty} onChange={(e) => { dispatch(setDepartment(e.target.value)) }} onClick={(e) => { resetEmpty() }}>
                        <option value='0'>Select department</option>
                        {
                            employeeOptions.departments.map((department, index) => {
                                return (
                                    <option value={department.id} key={index} onClick={(e)=>{}}>{department.departmentName}</option>
                                )
                            })
                        }
                    </select>
                </div> */}

                {/* Role */}
                <div className='flex flex-col'>
                    <label htmlFor='employeeRole' className={`${emptyData.role ? 'text-black' : 'text-red-500'}`}>{labels.role}</label>
                    <select id='employeeRole' className={emptyData.role ? inputClass : inputClassEmpty} onChange={(e) => { dispatch(setRole(e.target.value)) }} onClick={(e) => { resetEmpty() }}>
                        <option value='0'>Select role</option>
                        {
                            employeeOptions.roles.map((role, index) => {
                                return (
                                    <option value={role.id} key={index}>{role.roleName}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor='visitorPass' className={`${emptyData.password ? 'text-black' : 'text-red-500'}`}>{labels.password}</label>
                    <input type='password' id='visitorPass' className={emptyData.password ? inputClass : inputClassEmpty} placeholder='Password...' value={newEmployee.hostPassword} onChange={(e) => { dispatch(setPassword(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor='visitorPass' className={`${emptyData.rpassword ? 'text-black' : 'text-red-500'}`}>{labels.rpassword}</label>
                    <input type='password' id='visitorPass' className={emptyData.rpassword ? inputClass : inputClassEmpty} placeholder='Re-password...' value={newEmployee.hostRePassword} onChange={(e) => { dispatch(setRePassword(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div>


            </div>

            {/* Visitor's details */}
            <div className='grid w-[100%] md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 p-6 border rounded-lg mb-8'>

                <div className='col-span-full text-lg font-semibold'>
                    <h1 className='text-black'>address details</h1>
                </div>

                {/* Visitor Address */}
                <div className='flex flex-col col-span-full'>
                    <label htmlFor='purpose' className={`${emptyData.address ? 'text-black' : 'text-red-500'}`}>{labels.address}</label>
                    <textarea id='purpose' className={`${emptyData.address ? inputClass : inputClassEmpty}  h-32`} placeholder="enter full address..." value={newEmployee.hostAddress} onClick={() => { resetEmpty() }} onChange={(e) => { dispatch(setAddress(e.target.value)) }}></textarea>
                </div>
            </div>




            <div className='grid grid-cols-1 w-full mb-10'>
                <div className='flex item-center justify-center md:justify-start gap-3'>
                    <button className='text-white p-2 w-[15%] rounded bg-violet-600 hover:bg-violet-700' onClick={() => { executeAddingEmployee() }}>
                        <h1 className='flex items-center justify-center gap-3'>Create Employee</h1></button>
                    <ToastContainer autoClose={2000} />
                    <button className='text-violet-600 bg-white p-2 w-[15%] border border-violet-600 rounded hover:text-white hover:border-red-500 hover:bg-red-500' onClick={() => {
                        resetEmpty()
                        // $('#productCategory').val('0')
                        dispatch(resetNewEmp())
                    }} >
                        <h1 className='flex items-center justify-center gap-3'>Clear</h1>
                    </button>
                </div>

            </div>


        </>
    )
}