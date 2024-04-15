import React from 'react'
import { useState , useEffect} from 'react'

function Fetchdata(){
  const [data, setData] = useState(null);
  useEffect(()=>{
    const fetching = async () =>{
      let responce = await fetch('https://fakestoreapi.com/products')
      let jsonData = await responce.json()
      console.log(jsonData)
      setData(jsonData)
    }
    fetching()
  },[])
  return (
    <div className='main'>
      <h2>Man's Fashion :- </h2>
      <div className='submain'>
        {
          data && data.map((e)=>{
            if(e.category === "men's clothing"){
              return<>
                <Box image={e.image} title={e.title} price={e.price} description={e.description} id={e.id}/>
              </>
            }
          })
        }
    </div>
      <h2>Woman's Fashion</h2>
      <div className='submain'>
        {
          data && data.map((e)=>{
            if(e.category === "women's clothing"){
              return<>
                <Box image={e.image} title={e.title} price={e.price} description={e.description} />
              </>
            }
          })
        }
    </div>
      <h2>Electronics</h2>
      <div className='submain'>
        {
          data && data.map((e)=>{
            if(e.category === "electronics"){
              return<>
                <Box image={e.image} title={e.title} price={e.price} description={e.description} />
              </>
            }
          })
        }
    </div>
      <h2>Jewelery</h2>
      <div className='submain'>
        {
          data && data.map((e)=>{
            if(e.category === "jewelery"){
              return<>
                <Box image={e.image} title={e.title} price={e.price} description={e.description} id={e.id}/>
              </>
            }
          })
        }
    </div>
    </div>
  )
}

function Box(e){
  return(
    <div className='productBox'>
          <center><img src={e.image} className='img'></img></center>
            <h4>{e.title}</h4>
            <h3>${e.price} (₹{Math.floor(e.price*78)})</h3>

            <div className='description'>
              <h4>Description <i class="bi bi-chevron-right left"></i></h4>
              <p>{e.description}</p>
            </div><br></br>
            <button>Add to Cart</button>
    </div>
  )
}

export default Fetchdata
