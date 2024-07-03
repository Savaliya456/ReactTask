import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from './Config';
import './App.css';

function Home({ setValue }) {
    const handleSignOut = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("email");
            setValue('');
            console.log("Sign-out successful.");
        }).catch((error) => {
            console.error("An error happened during sign-out:", error);
        });
    };

    return (
        <div className="home-container">
            <h1>Welcome Home</h1>
            <button className="signout-button" onClick={handleSignOut}>Sign out</button>
        </div>
    );
}

export default Home;