import React from 'react';
import { auth, microsoftProvider } from './Config';
import { signInWithPopup } from 'firebase/auth';
import { FaMicrosoft } from 'react-icons/fa';
// import './SignupForm.css';

function Signup() {
    const handleClick = () => {
        signInWithPopup(auth, microsoftProvider)
            .then((result) => {
                const user = result.user;
                const credential = microsoftProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                const idToken = credential.idToken;
                console.log('User:', user);
                console.log('Access Token:', accessToken);
                console.log('ID Token:', idToken);
            })
            .catch((error) => {
                // console.error('Error during sign-in:', error);
                alert(error);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h4 className="card-title mb-0">Sign Up with Microsoft</h4>
                        </div>
                        <div className="card-body text-center">
                            <button
                                className="btn btn-info"
                                onClick={handleClick}
                            >
                                <FaMicrosoft /> Sign up with Microsoft
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
