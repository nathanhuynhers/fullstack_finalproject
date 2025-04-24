import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#559AA5',
      color: '#fff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        WonderPet
      </div>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to='/' style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to='/contact' style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        <Link to='/about' style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        <Link to='/login' style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
      </div>
    </nav>
  )
}