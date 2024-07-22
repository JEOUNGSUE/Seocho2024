import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './ui/Main';
import Content from './ui/Content';
import Profile from './components/Profile/Profile';
import Stats from './components/Stats.jsx/Stats';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import { Router, Routes } from 'react-router-dom';

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
    <Router>
      <div className={`${darkMode && 'dark'} font-quickSand`}>
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          toggleSidebar={toggleSidebar}
        />
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Navigation />
        <Main>
          <Content>
            <Routes>
              <Router path="/" element={<Stats darkMode={darkMode} />} />{' '}
              <Router path="/Login" element={<Login />} />
            </Routes>
            <div className="flex flex-col gap-3 lg:flex-row"></div>
          </Content>
          <Profile />
        </Main>
      </div>
    </Router>
  );
};

export default App;
