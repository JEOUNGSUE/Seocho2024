import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './ui/Main';
import Content from './ui/Content';
import Profile from './components/Profile/Profile';
import Stats from './components/Stats.jsx/Stats';
import Navigation from './components/Navigation/Navigation';
import Login from './components/pages/Login';

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
              <Route path="/" element={<Stats darkMode={darkMode} />} />{' '}
              <Route path="/Login" element={<Login />} />
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
