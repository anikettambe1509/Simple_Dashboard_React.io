import { FaUserCircle, FaBell } from 'react-icons/fa'; 

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4">
      <div className="text-2xl font-semibold text-gray-700">Welcome to Aniket's Dashboard</div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600 text-2xl hover:text-blue-500 cursor-pointer" />
        <FaUserCircle className="text-gray-600 text-3xl hover:text-blue-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
