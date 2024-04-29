import React from 'react'
import { useState, useEffect} from 'react'


function Test() {
  const [test, setTest] = useState(null)
  useEffect(()=>{
    const fetching = async () =>{
      let responce = await fetch('https://restcountries.com/v3.1/all')
      // let responce = await fetch('https://fakestoreapi.com/products')
      let jsonData = await responce.json()
      console.log(jsonData) 
    }
    fetching()
  },[])
  return (
    <div>
  
    </div>
  )
}

export default Test
