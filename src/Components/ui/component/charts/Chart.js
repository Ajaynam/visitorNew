// src/components/Chart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';

// import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h3 className="text-xl font-semibold">Total Visitors (Monthly)</h3>
      <div className="mt-4">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="line"
        width="500"
      />
      </div>
    </div>
  );
};

export default Chart;
