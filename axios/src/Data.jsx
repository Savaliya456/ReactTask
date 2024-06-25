import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import loader from './loader.gif'

function Data() {
    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {

        const fetching = async () => {
            try {
                setloading(true)
                let responce = await axios.get('https://fakestoreapi.com/users')
                setData(responce.data)
                setloading(false)
            } catch (err) {
                console.log(err)
                setloading(false)
            }
        }
        
        setTimeout(() => {
            fetching()
        }, 3000);

    }, [])

    return (
        <div>
        {loading ? (
        <div>
            <center>
                <img src='https://cdn.dribbble.com/users/2208826/screenshots/6286951/guanxian.gif' style={{width : '100%',height : '100vh'}}  alt="" />
            </center>
        </div>
        ) : (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((element) => (
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{`${element.name.firstname} ${element.name.lastname}`}</td>
                            <td>{element.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>

    )
}

export default Data
