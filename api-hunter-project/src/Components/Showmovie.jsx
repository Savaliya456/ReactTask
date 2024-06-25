import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import './ShowMovie.css';

function Showmovie() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(data)

    useEffect(() => {
        const fetching = async () => {
            try {
                setLoading(true);
                let response = await axios.get('http://localhost:8000/data');
                setData(response.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        };
        setTimeout(() => {
            fetching()
        }, 1000);
    }, []);

    const handleDelete = async (id,movie) => {
        let confirm = window.confirm(`Are you sure to delete ${movie} ?`);
        if (confirm) {
            try {
                await axios.delete(`http://localhost:8000/data/${id}`);
                setData(data.filter(e => e.id !== id));
            } catch (err) {
                alert('Unfortunately not deleted');
            }
        }
    };

    const handleEdit = (id) => {
        // Handle edit logic here
        alert(`Edit movie with id ${id}`);
    };

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                {loading ? (
                    <div className="loading-container">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only"></span>
                        </div>
                        <p>Loading movies...</p>
                    </div>
                ) : (
                    data.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <div className="movie-card-header">
                                <h1>{movie.title}</h1>
                                <div className="icon-container">
                                    <FaEdit className="text-success" onClick={() => handleEdit(movie.id)} />
                                    <FaTrashAlt className="text-danger" onClick={() => handleDelete(movie.id,movie.title)} />
                                </div>
                            </div>
                            <p><strong>Director :</strong> {movie.director}</p>
                            <p><strong>Genre :</strong> {movie.genre}</p>
                            <p><strong>Release Year :</strong> {movie.releaseyear}</p>
                            <p><strong>Description :</strong> {movie.discription}</p>
                            {/* <img src={`http://localhost:8000/uploads/${movie.poster}`} alt={`${movie.title} poster`} className="poster-image"/> */}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Showmovie;
