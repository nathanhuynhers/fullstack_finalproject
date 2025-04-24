import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid text-white vh-100 d-flex align-items-center px-5" style={{ backgroundColor: '#559AA5' }}>
      <div className="row w-100 align-items-center">
        {/* Dog Image - Left Side */}
        <div className="col-md-6 text-center">
          <img src="/home_dog.png" alt="Cute Dog" className="img-fluid" style={{ maxWidth: '1000px' }} />
        </div>

        {/* Text Section - Right Side */}
        <div className="col-md-6">
          <h1 className="display-4 fw-light">WonderPet</h1>
          <hr className="border-5 w-25 my-4" />
          <p className="lead">
            Wonderpet helps you keep everything about your pet in one place.
            From vet records and care schedules to adorable memories, we’ve got you covered.
          </p>
          <button className="btn btn-dark rounded px-4 py-2" style={{ backgroundColor: '#0F363D'}}>
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
