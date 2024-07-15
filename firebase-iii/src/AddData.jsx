import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

function AddData({handleSubmit, data}) {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  console.log(data.length)
  function handleSubmitthis(e){
    const id = (data.length === 0) ? 1 : (parseInt(data[data.length-1].id) + 1)
    handleSubmit(id,name,email,password,e)
    setname('')
    setemail('')
    setpassword('')
  }
  return (
    <div>
      <Navbar />
      <div>
        <form action="" onSubmit={handleSubmitthis} >
          <label htmlFor="">Enter Your Name</label>
          <input type="text" value={name} onChange={(e) => setname(e.target.value)} /> <br /><br />

          <label htmlFor="">Enter Your Email</label>
          <input type="text" value={email} onChange={(e) => setemail(e.target.value)} /> <br /><br />

          <label htmlFor="">Set Password</label>
          <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} /> <br /><br />

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddData
