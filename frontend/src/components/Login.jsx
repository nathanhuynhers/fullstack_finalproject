import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log('Logged in:', userCredential.user)
    } catch (err) {
      setError(err.message)
    }
  }

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
      <form onSubmit={handleLogin} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Login</h2>

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            color: '#333',
            width: '100%'
          }}
        />

        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            color: '#333',
            width: '100%'
          }}
        />

        <button type='submit' style={{
          padding: '0.75rem',
          backgroundColor: '#559AA5',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          width: '100%'
        }}>
          Login
        </button>

        {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
      </form>

      <div style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
        Don't have an account?{' '}
        <Link to='/signup' style={{ color: '#559AA5', fontWeight: '500', textDecoration: 'none' }}>
          Sign up now
        </Link>
      </div>
    </div>
  )
}