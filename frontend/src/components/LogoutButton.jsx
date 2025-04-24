import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function LogoutButton() {
  const handleLogout = () => {
    signOut(auth)
      .then(() => console.log('User signed out'))
      .catch((error) => console.error('Logout error:', error));
  };

  return <button onClick={handleLogout}>Logout</button>;
}
