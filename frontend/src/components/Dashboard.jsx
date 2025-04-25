import React from 'react';
import { auth } from '../firebase';


export default function Dashboard() {
  const user = auth.currentUser;

  return (
    <>
      <div style={{ padding: '2rem' }}> 
        <h1>Welcome to your Dashboard</h1>
        {user && <p>Hello, {user.displayName}!</p>}
      </div>
    </>
    // Remove this as needed to style
  );
}
