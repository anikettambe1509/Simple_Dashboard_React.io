import { FaHome, FaCogs, FaChartBar } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-500 to-blue-700 text-white h-full fixed top-0 left-0 shadow-xl z-50">
      <div className="text-center py-8 text-2xl font-bold">
        Aniket's Dashboard
      </div>
      <ul className="space-y-2">
        <li>
          <a href="#" className="flex items-center p-4 hover:bg-blue-600 rounded-md transition duration-200">
            <FaHome className="mr-3" /> Home
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-4 hover:bg-blue-600 rounded-md transition duration-200">
            <FaCogs className="mr-3" /> Settings
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-4 hover:bg-blue-600 rounded-md transition duration-200">
            <FaChartBar className="mr-3" /> Analytics
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
