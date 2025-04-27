import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../AuthContext'; 

const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
  
    useEffect(() => {
      if (user) {
        navigate('/dashboard');
      }
    }, [user, navigate]);
  return (
    <div
    className="text-white d-flex align-items-center px-5"
    style={{
      backgroundColor: '#559AA5',
      minHeight: '50vh',
    }}
    >
      <div className="row w-100 align-items-center">
        {/* Dog Image - Left Side */}
        <div className="col-md-6 text-center">
          <img src="/home_dog.png" alt="Cute Dog" className="img-fluid" style={{ maxWidth: '1000px', maxHeight: '110vh' }} />
        </div>

        {/* Text Section - Right Side */}
        <div className="col-md-6">
          <h1 className="display-4 fw-light">WonderPet</h1>
          <hr className="border-5 w-25 my-4" />
          <p className="lead">
            Wonderpet helps you keep everything about your pet in one place.
            From vet records and care schedules to adorable memories, we’ve got you covered.
          </p>
          <button className="btn btn-dark rounded px-4 py-2" style={{ backgroundColor: '#0F363D'}} onClick={() => navigate('/login')}>
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;