import React from 'react';
import { Routes, Route, Link,} from 'react-router-dom';
import './App.css';
import dogImage from './Images/dog.svg';
import logoImage from './Images/logo.svg';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">
        <img src={logoImage} alt="White fluffy dog" /> 
          WONDERPET
        </div>
        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#">CONTACT</a>
          <a href="#">ABOUT</a>
          <a href="#">LOGIN</a>
        </div>
      </nav>
      
      <main className="hero">
        <div className="hero-image">
          <img src={dogImage} alt="White fluffy dog" />
        </div>
        <div className="hero-content">
          <h1>WonderPet</h1>
          <p>Wonderpet helps you keep everything about your pet in one place. From vet records and care schedules to adorable memories, we've got you covered</p>
          <button className="get-started">Get Started →</button>
        </div>
      </main>
    </div>
  );
}

export default App;
