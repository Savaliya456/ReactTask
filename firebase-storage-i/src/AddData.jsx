import React from 'react'
import { database } from './Config';
import { ref, set } from "firebase/database";
import { useState } from 'react';

function AddData() {
    const [id, setid] = useState(1)
    const [name, setname] = useState('')
    const [email, setemail] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const newRef = ref(database, `users/${id}`)
        set(newRef, {name,email})
        .then(()=>{
            alert('Data add succefully')
        }).catch((err)=>{
            alert('Data add unsuccefully')
        })
        setname('')
        setemail('')
        setid(id+1)
    }

    return (
    <div>
        <form action="" onSubmit={handleSubmit} >
            <label htmlFor="">Enter Your Name</label>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} /> <br /><br />

            <label htmlFor="">Enter Your Email</label>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} /> <br /><br />

            <button type='submit'>Submit</button>

        </form>
      
    </div>
  )
}

export default AddData
