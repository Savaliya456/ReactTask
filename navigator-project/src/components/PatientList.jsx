import React, { useState, useEffect } from 'react';
import PatientForm from './PatientForm';
import styles from './PatientList.module.css';

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    const [editPatient, setEditPatient] = useState(null);

    useEffect(() => {
        const fetchPatients = async () => {
            // Example data, replace with actual API call
            const response = [
                { id: 1, name: 'John Doe', age: 30, ailment: 'Flu' },
                { id: 2, name: 'Jane Smith', age: 25, ailment: 'Cold' }
            ];
            setPatients(response);
        };

        fetchPatients();
    }, []);

    const addPatient = (patient) => {
        setPatients([...patients, { ...patient, id: Date.now() }]);
    };

    const updatePatient = (updatedPatient) => {
        setPatients(
            patients.map((patient) =>
                patient.id === updatedPatient.id ? updatedPatient : patient
            )
        );
        setEditPatient(null);
    };

    const deletePatient = (id) => {
        setPatients(patients.filter((patient) => patient.id !== id));
    };

    return (
        <div className={styles.container}>
            <h1>Hospital Management</h1>
            <PatientForm
                addPatient={addPatient}
                editPatient={editPatient}
                updatePatient={updatePatient}
            />
            <ul className={styles.patientList}>
                {patients.map((patient) => (
                    <li key={patient.id} className={styles.patientItem}>
                        {patient.name}, Age: {patient.age}, Ailment: {patient.ailment}
                        <button onClick={() => setEditPatient(patient)}>Edit</button>
                        <button onClick={() => deletePatient(patient.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;