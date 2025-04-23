import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export default function Welcome() {
  const [displayName, setDisplayName] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(user.displayName);
      } else {
        setDisplayName(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {displayName ? <h2>Hi {displayName}!</h2> : <h2>Please log in or sign up</h2>}
    </div>
  );
}
