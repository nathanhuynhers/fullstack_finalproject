import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log('Logged in:', userCredential.user)
      navigate('/dashboard');
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', paddingTop: '20px' }}>
      <form onSubmit={handleLogin} style={{ width: '300px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Satoshi, sans-serif' }}>Account Login</h2>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <button type='submit' style={{ width: '100%', padding: '0.8rem', backgroundColor: '#559AA5', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Log In
        </button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        <div style={{ marginTop: '1rem' }}>
          <p>Don't have an account? <Link to='/signup' style={{ color: '#559AA5' }}>Sign up now</Link></p>
        </div>
      </form>
    </div>
  )
}