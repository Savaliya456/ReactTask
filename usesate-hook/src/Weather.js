import React, { useEffect, useState } from 'react'

function Weather() {
    const [city , setCity] = useState(null)
    const [search , setSearch] = useState("Mumbai")

   useEffect ( () => {
    //promise return ... fullfild or reject
    const fetchApi = async () => {
        const url = https
        const response = await fetch(url)
    }
    fetchApi();
   })

    function func() {

    }

    return (
        <div style={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>

            <h2>Weather App</h2>

            <div id='weather-box'>
                <div className='input'>
                    <input type="search" defaultValue='' className='inputfield' onChange={(event) => func} />
                </div>
                <div className='info'>
                    <h2 className='location'></h2>
                    <i>street view {city} </i>
                    <h1 className='temp'>
                        5.25Cel
                    </h1>   
                    <h3 className='temp-max'>
                        
                    </h3>
                </div>
                <div className='wave-one'></div>
                <div className='wave-two'></div>
                <div className='wave-three'></div>
            </div>

        </div>
    )
}

export default Weather
