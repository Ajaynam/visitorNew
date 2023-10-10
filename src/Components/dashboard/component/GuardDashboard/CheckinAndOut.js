import React from 'react'
// import { Button } from '../../../components/ui'

function CheckinAndOut() {
    return (
        <div>
            <div>
                {/* <span>Please tap on button to check in</span> */}
                <div className='lg:flex gap-4'>
                    <button
                        className="mt-4 bg-violet-500 text-white py-2 lg:px-8 px-16 rounded-[10px] hover:bg-violet-600 transition duration-300 ease-in-out"
                    // onClick={handlePrint}
                    >
                        Visitor Check-In
                    </button> 
                    <button
                        className="mt-4 bg-red-500 text-white py-2 px-16  lg:px-8 rounded-[10px] hover:bg-red-600 transition duration-300 ease-in-out"
                    >
                        Visitor Check-Out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckinAndOut