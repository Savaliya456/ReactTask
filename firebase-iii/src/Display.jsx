import React, { useState } from 'react';
import Navbar from './Navbar';
import './Display.css';
import { FaEye, FaEyeSlash, FaEdit, FaTrash } from 'react-icons/fa';

function Display({ data, handleDelete, handleEdit }) {
    const [visiblePassword, setVisiblePassword] = useState(null);

    const togglePasswordVisibility = (id) => {
        if (visiblePassword === id) {
            setVisiblePassword(null);
        } else {
            setVisiblePassword(id);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    {data.map((users) => (
                        <div key={users.id} className="col-md-4">
                            <div className="user-card card shadow-sm p-3 mb-5 bg-white rounded">
                                <div className="user-info card-body">
                                    <h5 className="user-name card-title">Name: {users.name}</h5>
                                    <h6 className="user-email card-subtitle mb-2 text-muted">Email: {users.email}</h6>
                                    <div className="user-password">
                                        Password : &nbsp;
                                        {visiblePassword === users.id ? (
                                            <span> {" " + users.password} </span>
                                        ) : (
                                            <span> **** </span>
                                        )}
                                        <button
                                            className="btn btn-link"
                                            onClick={() => togglePasswordVisibility(users.id)}
                                        >
                                            {visiblePassword === users.id ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                    <div style={{display : 'flex', justifyContent : 'center'}}>
                                        <button
                                            className="btn btn-danger mt-2"
                                            onClick={() => handleDelete(users.id)}
                                        >
                                            <FaTrash /> Delete
                                        </button>
                                        <button
                                            className="btn btn-primary mt-2 ml-2"
                                            onClick={() => handleEdit(users.id)}
                                        >
                                            <FaEdit /> Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Display;
