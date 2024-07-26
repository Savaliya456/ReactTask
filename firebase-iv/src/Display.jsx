import React from 'react'
import { Link } from 'react-router-dom'
import { database } from './Config';
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from 'react';

function Display() {
    const [displayData, setdisplayData] = useState([])
    const [datalength, setdatalength] = useState(0)

    useEffect(() => {

        const Ref = ref(database, 'users');
        onValue(Ref, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            if (data) {
                const userlist = Object.keys(data).map((key) => ({
                    name: key,
                    ...data[key]
                }))
                console.log("after " + userlist)
                setdisplayData(userlist)
                setdatalength(userlist.length)
            }
            else {
                setdisplayData([])
            }
        });
    }, [])

    return (
        <div>
            <button><Link to='/'>Add Data</Link></button>
            {
                displayData.map((users) => (
                    <div key={users.name}>
                        <h1>{users.name}</h1>
                        <h1>{users.email}</h1><br /><br />
                    </div>
                ))
            }

        </div>
    )
}

export default Display
