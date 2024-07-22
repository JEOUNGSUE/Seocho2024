import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/api';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users').then(response => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div className="user-list">
      <h2>User List</h2>
      <Link to="/user/new">Add New User</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/user/edit/${user.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
