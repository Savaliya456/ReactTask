import React, { useState, useEffect } from 'react';
import styles from './PatientForm.module.css';

const PatientForm = ({ addPatient, editPatient, updatePatient }) => {
    const [patient, setPatient] = useState({ id: null, name: '', age: '', ailment: '' });

    useEffect(() => {
        if (editPatient) {
            setPatient(editPatient);
        } else {
            setPatient({ id: null, name: '', age: '', ailment: '' });
        }
    }, [editPatient]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({ ...patient, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (patient.id) {
            updatePatient(patient);
        } else {
            addPatient(patient);
        }
        setPatient({ id: null, name: '', age: '', ailment: '' });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                name="name"
                value={patient.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className={styles.input}
            />
            <input
                type="number"
                name="age"
                value={patient.age}
                onChange={handleChange}
                placeholder="Age"
                required
                className={styles.input}
            />
            <input
                type="text"
                name="ailment"
                value={patient.ailment}
                onChange={handleChange}
                placeholder="Ailment"
                required
                className={styles.input}
            />
            <button type="submit" className={styles.button}>
                {patient.id ? 'Update' : 'Add'}
            </button>
        </form>
    );
};

export default PatientForm;