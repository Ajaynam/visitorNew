// src/components/Dashboard.js
import React from 'react';

import Card from '../../ui/component/cards/Card';
import Chart from '../../ui/component/charts/Chart';
import CheckinAndOut from './CheckinAndOut.js';

const DashboardComponents = () => {
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
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-semibold mb-4">Visitor Dashboard</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} value={card.value} />
        ))}

      </div>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-4 gap-4 ">
        <div className='col-span-2 mx-auto'> <CheckinAndOut /></div>
        <div  className='col-span-2'>    <Chart data={chartData} /></div>

      </div>

    </div>
  );
};

export default DashboardComponents;
