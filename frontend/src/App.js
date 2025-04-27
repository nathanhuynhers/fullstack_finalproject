import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
// import Login from './components/Login'
// import Welcome from './components/Welcome'
// import LogoutButton from './components/LogoutButton'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import { AuthProvider } from './AuthContext';


function Contact() {
  return <div style={{ padding: '1rem' }}>Contact Page</div>
}

function About() {
  return <div style={{ padding: '1rem' }}>About Page</div>
}


 

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
