import React from 'react'
// src/components/Dashboard.js
// import React from 'react';
import CheckinAndOut from './CheckinAndOut.js';
import Chart from '../../../ui/component/charts/Chart.js';
import Card from '../../../ui/component/cards/Card.js';
import Header from '../../../ui/component/Header.jsx';
import EmployeeTable from '../../../employeeTable/components/EmployeeTable.js';
import RecentTable from '../AdminDashboard/RecentTable.js';

export default function GuardDashboard() {



  // Dummy data for cards
  const cardsData = [
    { title: 'Total Visitor', value: 1000 },
    { title: 'Today Visitor', value: 150 },
    { title: 'Today Check-In', value: 80 },
    { title: 'Today Check-Out', value: 70 },
  ];

  // Dummy data for the chart
  const chartData = {
    options: {
      chart: {
        id: 'basic-line',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      },
    },
    series: [
      {
        name: 'Series 1',
        data: [30, 40, 35, 50, 49],
      },
    ],
  };
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        <div className='col-span-1'>
          <Header heading={'Visitor Overview'} title={'Please tap on button to check in'} />
        </div>
        <div className='lg:col-span-3  col-span-1 lg:ml-10'>
        <CheckinAndOut />
        </div>
      </div>
      <div className="container mx-auto p-4">
        {/* <h1 className="text-2xl font-semibold mb-4">Visitor Dashboard</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} value={card.value} />
          ))}

        </div>
        <div className="grid grid-cols-1 mt-6 md:grid-cols-4 gap-4 ">
          <div className='col-span-2 mx-auto'><RecentTable/></div>
          <div className='col-span-2'>    <Chart data={chartData} /></div>

        </div>

      </div>
    </>
  )
}
