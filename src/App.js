import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 ml-64 p-8 overflow-y-auto">
          <Header />
          <Dashboard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
