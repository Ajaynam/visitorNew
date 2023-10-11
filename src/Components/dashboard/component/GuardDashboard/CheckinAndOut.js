// import React from 'react'
// // import { Button } from '../../../components/ui'
import React, { useState } from 'react'

// function CheckinAndOut() {
//     return (
//         <div>
//             <div>
//                 {/* <span>Please tap on button to check in</span> */}
//                 <div className='lg:flex gap-4'>
//                     <button
//                         className="mt-4 bg-violet-500 text-white py-2 lg:px-8 px-16 rounded-[10px] hover:bg-violet-600 transition duration-300 ease-in-out"
//                     // onClick={handlePrint}
//                     >
//                         Visitor Check-In
//                     </button>
                    
//                     <button
//                         className="mt-4 bg-red-500 text-white py-2 px-16  lg:px-8 rounded-[10px] hover:bg-red-600 transition duration-300 ease-in-out"
//                     >
//                         Visitor Check-Out
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CheckinAndOut

import React, { useState } from 'react'
import baseurl from '../../../../api/baseurl';
import axios from 'axios';
function CheckinAndOut() {

    const [visitorId, setVisitorId] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setVisitorId(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);

        if (visitorId.trim() === '') {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };

    const updateEntryStatus = `${baseurl}guard/visitor-checkout`
    const executeEntryStatus = (id, update) => {
        axios.post(updateEntryStatus, {
            visitorId: visitorId,
            updateTo: 'C'
        })
            .then((response) => {
                if (response.data.success)
                    alert(response.data.message)
                else
                    alert(response.data.message)
                
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                <div className='lg:flex gap-4'>
                    <button
                        className="mt-4 bg-violet-500 text-white py-2 px-12  lg:px-8 md:px-16 rounded-[10px] hover:bg-violet-600 transition duration-300 ease-in-out"
                    >
                        Visitor Check-In
                    </button>
                    <div>

                        <input
                            type="text"
                            id="visitorId"
                            name="visitorId"
                            placeholder="Enter Visitor ID"
                            value={visitorId}
                            onChange={handleInputChange}
                            className={`mt-4 px-4 py-2  rounded-md border ${isValid ? 'border-violet-300' : 'border-red-500'
                                } focus:outline-none focus:ring ${isValid ? 'focus:border-violet-500' : 'focus:border-red-500'
                                }`}
                        />
                        {!isValid && submitted && (
                            <p className="mt-2 text-red-600 text-sm">
                                Visitor ID is required.
                            </p>
                        )}
                    </div>
                    <button
                        className="mt-4 bg-red-500 text-white md:py-2  md:px-16  px-12 py-2  lg:px-8 rounded-[10px] hover:bg-red-600 transition duration-300 ease-in-out"
                        onClick={executeEntryStatus}
                    >
                        Visitor Check-Out
                    </button>
                </div>
            </div>
        </div >
    )
}

export default CheckinAndOut