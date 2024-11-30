import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { FaDollarSign, FaUsers, FaTrafficLight, FaClipboardList } from 'react-icons/fa';
import SalesChart from './SalesChart';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales ($)',
        data: [3000, 2000, 1500, 2500, 3500, 4000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const recentActivities = [
    { id: 1, action: 'User Login', time: '2024-11-29 10:30 AM' },
    { id: 2, action: 'New Order Placed', time: '2024-11-29 11:00 AM' },
    { id: 3, action: 'Profile Updated', time: '2024-11-29 12:15 PM' },
    { id: 4, action: 'Password Changed', time: '2024-11-29 1:30 PM' },
  ];

  return (
    <div className="bg-white p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Sales</h3>
            <p className="text-2xl">$12,500</p>
          </div>
          <FaDollarSign className="text-4xl" />
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Users</h3>
            <p className="text-2xl">1,200</p>
          </div>
          <FaUsers className="text-4xl" />
        </div>
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Traffic</h3>
            <p className="text-2xl">15,000</p>
          </div>
          <FaTrafficLight className="text-4xl" />
        </div>
      </div>

      <div className='mb-6'>
        <SalesChart />
      </div>

      {/* Sales Data Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Sales Overview</h3>
        <Bar data={salesData} />
      </div>

      {/* Recent Activities Table */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Action</th>
              <th className="py-2 px-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {recentActivities.map((activity) => (
              <tr key={activity.id} className="border-b">
                <td className="py-2 px-4">{activity.id}</td>
                <td className="py-2 px-4">{activity.action}</td>
                <td className="py-2 px-4">{activity.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
