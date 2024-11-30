import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesChart = () => {
  // Data for the sales chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}`; 
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true, 
      },
    },
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800">Sales Over Time</h3>
      <div className="mt-4">
        <Line data={data} options={options} />
      </div>
    </div>

  );
};

export default SalesChart;
