// SignIn.js

import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './Config';
import './App.css';

const SignIn = () => {
  const [error, setError] = useState('');

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign-out-container">
      <h2 className="sign-out-header">Sign Out</h2>
      <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignIn;