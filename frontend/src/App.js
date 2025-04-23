import React from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Welcome from './components/Welcome';
import LogoutButton from './components/LogoutButton';


function App() {


  return (
    <div>
      
        
        <SignUp />
        <hr />
        <Login />
        <hr />
        <Welcome /> 
        <hr />
        <LogoutButton />
        
      
    </div>
  );
}

export default App;
