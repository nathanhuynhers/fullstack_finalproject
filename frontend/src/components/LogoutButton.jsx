import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        setTimeout(() => {
          navigate('/');
        }, 500);
      })
      .catch((error) => console.error('Logout error:', error));
  };

  return <button onClick={handleLogout}>Logout</button>;
}
