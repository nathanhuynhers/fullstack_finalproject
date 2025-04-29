import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: name,
        email: email,
      });

      console.log('Signed up:', userCredential.user);
      navigate('/login');
    } catch (err) {
      console.error("Signup error", err); // Add console logging for debugging
      setError(err.message);
    }
  };

  return (
    <div style={{
      fontFamily: 'Satoshi Variable, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%',
      padding: '2rem'
    }}>
      <h2 style={{ marginBottom: '1rem' }}>Sign Up</h2>
      <form onSubmit={handleSignup} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        maxWidth: '400px',
      }}>
        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='name' style={{ marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
          <input
            id='name'
            type='text'
            placeholder='John Doe'
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              color: '#333',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='email' style={{ marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
          <input
            id='email'
            type='email'
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              color: '#333',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='password' style={{ marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
          <input
            id='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              color: '#333',
            }}
          />
        </div>

        <button type='submit' style={{
          padding: '0.75rem',
          backgroundColor: '#559AA5',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Sign Up
        </button>
      </form>

      <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
        Already have an account?{' '}
        <Link to='/login' style={{ color: '#559AA5', fontWeight: '500', textDecoration: 'none' }}>
          Log in
        </Link>
      </div>
    </div>
  );
}