import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={'${darkMode && "dark"} font-quickSand'}>
      <Header
        toggLeDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggLeSidebar={toggleSidebar}
      />

      <Sidebar isSidebarOpen={isSidebarOpen} />
    </div>
  );
};

export default App;
