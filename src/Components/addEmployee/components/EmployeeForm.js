// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addEmployee } from '../store/employeeSlice';
// import axios from 'axios'; // Import axios

// const EmployeeForm = () => {
//   const dispatch = useDispatch();

//   const [employeeData, setEmployeeData] = useState({
//     name: '',
//     id: '',
//     phone: '',
//     email: '',
//     password: '',
//     age: '',
//     gender: '',
//     address: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployeeData({ ...employeeData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send data to the dummy API
//       const response = await axios.post('https://dummyapi.com/employees', employeeData);

//       // Dispatch the action to store the data in Redux
//       dispatch(addEmployee(response.data));
      
//       // Reset the form fields
//       setEmployeeData({
//         name: '',
//         id: '',
//         phone: '',
//         email: '',
//         age: '',
//         gender: '',
//         address: '',
//       });
//     } catch (error) {
//       console.error('Error while submitting data:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} class="max-w-2xl mx-auto p-4 space-y-4">
//     <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
//       <div>
//         <label for="name" class="block text-gray-700">Employee Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={employeeData.name}
//           onChange={handleChange}
//           class="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-300"
//         />
//       </div>
  
//       <div>
//         <label for="phone" class="block text-gray-700">Contact Number:</label>
//         <input
//           type="text"
//           id="phone"
//           name="phone"
//           value={employeeData.phone}
//           onChange={handleChange}
//           class="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-300"
//         />
//       </div>
  
//       <div>
//         <label for="email" class="block text-gray-700">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={employeeData.email}
//           onChange={handleChange}
//           class="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-300"
//         />
//       </div>
  
//       <div>
//         <label for="age" class="block text-gray-700">Age:</label>
//         <input
//           type="text"
//           id="age"
//           name="age"
//           value={employeeData.age}
//           onChange={handleChange}
//           class="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-300"
//         />
//       </div>
  
//       <div>
//         <label for="gender" class="block text-gray-700">Gender:</label>
//         <input
//           type="text"
//           id="gender"
//           name="gender"
//           value={employeeData.gender}
//           onChange={handleChange}
//           class="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-300"
//         />
//       </div>
  
//       <div>
//         <label for="address" class="block text-gray-700">Address:</label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={employeeData.address}
//           onChange={handleChange}
//           class="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-300"
//         />
//       </div>
//     </div>
  
//     <button type="submit" class="bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600">
//       Submit
//     </button>
//   </form>
  
  
//   );
// };

// export default EmployeeForm;






import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setName, setMobile, setEmail, setAddress, setGender, setPassword, setDepartment, resetNewBuying } from '../store/employeeSlice'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react';
import Header from '../../ui/component/Header';
export default function EmployeeForm() {

    const inputClass = 'border-2 outline-none p-2 rounded mt-2 border-[rgba(0,0,0,0.1)] focus:border-violet-600 focus:border-[2px] resize-none';
    const inputClassEmpty = 'border-2 outline-none p-2 rounded mt-2 border-red-400 focus:border-violet-600 focus:border-[2px] resize-none';

    const newEmployeeAPI = 'http://localhost:8000/visitor/new-visit';
    const checkUserAPI = 'http://localhost:8000/data/check-user';

    const dispatch = useDispatch();

    const newEmployee = useSelector((state) => {

        return state.newEmployee;
    })

    const [emptyData, setEmptyData] = useState({
        name: true,
        num: true,
        email: true,
        password:true,
        gender: true,
        address: true,
        department: true,
    })

    const [labels, setLabels] = useState({
        name: 'Employee Name',
        number: 'contact number',
        email: ' email',
        password: ' password',
        gender: 'Select gender',
        address: 'Complete address',
        department: 'Select host',
    })


    const executeBuying = () => {
        console.log(newEmployee)
        let flag = 1;
        if (newEmployee.name === '') {
            setEmptyData(prev => ({ ...prev, name: false }))
            setLabels(prev => ({ ...prev, name: ' name required !' }))
            flag = 0;
        }
        if (newEmployee.mobile === '') {
            setEmptyData(prev => ({ ...prev, num: false }))
            setLabels(prev => ({ ...prev, number: 'number required!' }))
            flag = 0;
        }
        if (newEmployee.email === '') {
            setEmptyData(prev => ({ ...prev, email: false }))
            setLabels(prev => ({ ...prev, email: 'address required!' }))
            flag = 0;
        }
        if (newEmployee.gender === '') {
            setEmptyData(prev => ({ ...prev, gender: false }))
            setLabels(prev => ({ ...prev, gender: 'Gender required!' }))
            flag = 0;
        }
    
   
        if (newEmployee.address === '') {
            setEmptyData(prev => ({ ...prev, address: false }))
            setLabels(prev => ({ ...prev, address: 'Address required!' }))
            flag = 0;
        }
  
  
        if (newEmployee.password === '') {
            setEmptyData(prev => ({ ...prev, password: false }))
            setLabels(prev => ({ ...prev, password: 'password required!' }))
            flag = 0;
        }
        if (newEmployee.department  === '') {
            setEmptyData(prev => ({ ...prev, department : false }))
            setLabels(prev => ({ ...prev, department : 'department required!' }))
            flag = 0;
        }
        if (flag) {
            axios.post(newEmployeeAPI, newEmployee)
                .then((response) => {
                    console.log(response.data)
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
            address: true,
            password: true,
            department : true
        })
        setLabels({
            name: 'Employee name',
            number: 'Contact number',
            email: ' email',
            gender: 'Select gender',
            address: 'Complete address',
            password: 'password',
            department: 'department',
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

    return (
        <>
            <Header heading={'Add New Employee'} title={'Fill information for creating new Employee'} />
            {/* <div className='absolute bg-[rgba(0,0,0,0.5)] h-[100%] w-[100%] top-[0] left-0'>
        ...
        </div> */}
            {
                newEmployee.loading ?
                    <>
                        <div className='bg-[rgba(255,255,255,0.7)] absolute top-0 left-0 h-[100%]'>
                        </div>
                    </> :
                    <></>
            }

            <div className='grid w-[100%] lg:grid-cols-3 md:grid-cols-2 gap-5 gap-y-10 p-6 border-2 rounded-lg mb-8'>
                <div className='col-span-full text-lg font-semibold'>
                    <h1 className='text-black'>Employee personal details</h1>
                </div>

                {/* Visitor Name */}
                <div className='flex flex-col'>
                    <label htmlFor='visitorName' className={`${emptyData.name ? 'text-black' : 'text-red-500'}`}>{labels.name}</label>
                    <input type='text' id='visitorName' className={emptyData.name ? inputClass : inputClassEmpty} placeholder='Visitor name...' value={newEmployee.name} onChange={(e) => {
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
                    <input type='number' id='visitorNumber' className={emptyData.num ? inputClass : inputClassEmpty} placeholder='Visitor number...' value={newEmployee.mobile} onChange={(e) => { dispatch(setMobile(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div>

                {/* Visitor Email */}
                <div className='flex flex-col'>
                    <label htmlFor='visitorEmail' className={`${emptyData.email ? 'text-black' : 'text-red-500'}`}>{labels.email}</label>
                    <input type='text' id='visitorEmail' className={emptyData.email ? inputClass : inputClassEmpty} placeholder='Visitors email...' value={newEmployee.email} onChange={(e) => { dispatch(setEmail(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='visitorEmail' className={`${emptyData.password ? 'text-black' : 'text-red-500'}`}>{labels.password}</label>
                    <input type='text' id='visitorEmail' className={emptyData.password ? inputClass : inputClassEmpty} placeholder='password' value={newEmployee.password} onChange={(e) => { dispatch(setPassword(e.target.value)) }} onClick={() => { resetEmpty() }}></input>
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
            </div>

            {/* Visitor's details */}
            <div className='grid w-[100%] md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10 p-6 border rounded-lg mb-8'>

                <div className='col-span-full text-lg font-semibold'>
                    <h1 className='text-black'>address details</h1>
                </div>

                {/* Visitor Address */}
                <div className='flex flex-col col-span-full'>
                    <label htmlFor='purpose' className={`${emptyData.address ? 'text-black' : 'text-red-500'}`}>{labels.address}</label>
                    <textarea id='purpose' className={`${emptyData.address ? inputClass : inputClassEmpty}  h-32`} placeholder="enter full address..." value={newEmployee.address} onClick={() => { resetEmpty() }} onChange={(e) => { dispatch(setAddress(e.target.value)) }}></textarea>
                </div>
            </div>




            <div className='grid grid-cols-1 w-full mb-10'>
                <div className='flex item-center justify-center md:justify-start gap-3'>
                    <button className='text-white p-2 w-[15%] rounded bg-violet-600 hover:bg-violet-700' onClick={() => { executeBuying() }}>
                        <h1 className='flex items-center justify-center gap-3'>Create Employee</h1></button>
                    <ToastContainer autoClose={2000} />
                    <button className='text-violet-600 bg-white p-2 w-[15%] border border-violet-600 rounded hover:text-white hover:border-red-500 hover:bg-red-500' onClick={() => {
                        resetEmpty()
                        // $('#productCategory').val('0')
                        dispatch(resetNewBuying())
                    }} >
                        <h1 className='flex items-center justify-center gap-3'>Clear</h1>
                    </button>
                </div>

            </div>


        </>
    )
}