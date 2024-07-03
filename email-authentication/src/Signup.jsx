// SignUp.js

import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './Config';
import './App.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSignedUp(true);
      setUserEmail(email);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setSignedUp(false);
      setUserEmail('');
    } catch (err) {
      setError(err.message);
    }
  };

  if (signedUp) {
    return (
      <div className="signed-up-container">
        <h2 className="signed-up-header">Welcome, {userEmail}</h2>
        <p className="signed-up-email">You have successfully signed up!</p>
        <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <div className="sign-up-container">
      <h2 className="sign-up-header">Sign Up</h2>
      <form className="sign-up-form" onSubmit={handleSignUp}>
        <input
          className="sign-up-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="sign-up-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button className="sign-up-button" type="submit">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignUp;
