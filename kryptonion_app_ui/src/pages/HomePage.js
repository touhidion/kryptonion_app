import React, { useEffect, useState } from 'react';
import { getUsers, createUser } from '../services/userService';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    const newUser = {
      name: 'krypto',
      email: 'krypto@gmail.com',
      password: '1234'
    };

    try {
      const user = await createUser(newUser);
      setUsers([...users, user]);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Management Project</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default HomePage;
