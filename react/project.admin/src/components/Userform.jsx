import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from '../utils/api';

function UserForm() {
  const [user, setUser] = useState({ name: '', email: '' });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`/users/${id}`).then(response => {
        setUser(response.data);
      });
    }
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      axios.put(`/users/${id}`, user).then(() => {
        history.push('/users');
      });
    } else {
      axios.post('/users', user).then(() => {
        history.push('/users');
      });
    }
  };

  return (
    <div className="user-form">
      <h2>{id ? 'Edit User' : 'Add New User'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default UserForm;
