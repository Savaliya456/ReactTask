import './App.css';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {

  const [allProduct, setallProduct] = useState([])
  console.log(allProduct)

  function addProduct(newProduct) {
    setallProduct([...allProduct, newProduct])
  }

  function editProduct(id,name,desc,price,cate,image){
    const updatedProducts = allProduct.map((e) => (
      e.id === id ? {...allProduct, id:id,productName:name,productDescription:desc,productPrice:price,productCategory:cate,productImage:image}
    ));
    setallProduct(updatedProducts);
  };

  const deleteProduct = (index) => {
    const updatedProducts = allProduct.filter((_, i) => i !== index);
    setallProduct(updatedProducts);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home allProduct={allProduct}  deleteProduct={deleteProduct} />} />
          <Route path='/addproduct' element={<AddProduct addProduct={addProduct} />} />
          <Route path='/editproduct/:id' element={<EditProduct addProduct={addProduct} editProduct={editProduct} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
