import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        setTimeout(() => navigate('/'), 500); 
      })
      .catch((error) => console.error('Logout error:', error));
  };

  return (
    <nav
      style={{
        backgroundColor: '#559AA5',
        color: '#fff',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>WonderPet</div>

      {user ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontWeight: '500' }}>
            Hi, {user.displayName || user.email}
          </span>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#0F363D',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
          <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
        </div>
      )}
    </nav>
  );
}
