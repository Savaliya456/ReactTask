import React from 'react'
import Header from './Header'
import ShowProduct from './ShowProduct'

function Home({allProduct ,editProduct, deleteProduct }) {

  const showProduct = allProduct
  
  return (
    <div>
      <Header/>
      <ShowProduct allProduct={showProduct} editProduct={editProduct} deleteProduct={deleteProduct}  />
    </div>
  )
}

export default Home
