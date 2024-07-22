import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/users" component={UserList} />
            <Route path="/user/new" component={UserForm} />
            <Route path="/user/edit/:id" component={UserForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
