import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import baseurl from '../../../api/baseurl'
import axios from 'axios';


const PendingEntry = (setPendingEntries) => {

  const pendingEntriesUrl=`${baseurl}employee/pending-entries`    
      
//   const [pendingEntries, setPendingEntries] = useState(dummyData);

  const dispatch = useDispatch();
  const [pendingEntries, setpendingEntries] = useState([])

  const getPendingEntries = () => {
    axios.get(pendingEntriesUrl)
      .then((response) => {
        console.log(response.data)
        setpendingEntries(response.data)
      })
      .catch((error) => {
      console.log(error)
    })
  }


  const updateEntryStatus=`${baseurl}employee/update-pending`
  const executeEntryStatus = (id,update) => {
    axios.post(updateEntryStatus, {
      purposeId: id,
      updateTo:update
    })
      .then((response) => {
        // console.log(response.data)
        if (response.data.success)
          getPendingEntries();
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getPendingEntries();
  }, []);

  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-4">Pending Entry</h2>
      <table className="w-full border-collapse border  border-gray-300">
        <thead>
          <tr>
            <th className="p-2  px-4 font-medium text-[14px] border-gray-300">Visitor Name</th>
            <th className="p-2 px-4 font-medium  text-[14px] border-gray-300">Entry Time</th>
            <th className="p-2  px-4  font-medium  text-[14px] border-gray-300">Purpose</th>
            <th className="p-2  px-4  font-medium text-[14px] border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingEntries.map((entry,index) => (
            <tr id={entry.id} key={index}>
              <td className="p-2 border border-gray-300">{entry.visitorName}</td>
              <td className="p-2 border border-gray-300">{entry.entryTime}</td>
              <td className="p-2 border border-gray-300">{entry.reason}</td>
              <td className="p-2 border border-gray-300">
                {entry.action ? (
                  <span className="text-green-500">{entry.action}</span>
                ) : (
                  <>
                    <button
                      onClick={(e) =>{executeEntryStatus(e.target.parentElement.parentElement.id,'A')}}
                      className="px-2 py-1 bg-green-500 text-white rounded mr-2"
                    >
                      Accept
                    </button>
                    <button
                        onClick={(e) => { executeEntryStatus(e.target.parentElement.parentElement.id, 'R') }}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingEntry;
