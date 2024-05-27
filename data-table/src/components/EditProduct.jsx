import React, { useState } from 'react'
import Header from './Header'
import './AddProduct.css'
import { useParams, useNavigate } from 'react-router-dom';

function EditProduct({editProduct, allProduct}) {

    const {id} = useParams()
    let thisproduct = allProduct.find(e => e.id === parseInt(id))

    const [productName, setProductName] = useState(thisproduct.productName);
    const [productDescription, setProductDescription] = useState(thisproduct.productDescription);
    const [productPrice, setProductPrice] = useState(thisproduct.productPrice);
    const [productCategory, setProductCategory] = useState(thisproduct.productCategory);
    const [productImage, setProductImage] = useState(thisproduct.image);

    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        editProduct( thisproduct.id,productName,productDescription,productPrice,productCategory,productImage)
        navigate('/')
        // Reset form
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductCategory('');
        // setProductImage(null);
    };
    return (
        <div>
            <Header />
            <div className="addproduct container-fluid border">
                <div className="row justify-content-center" id='row'>
                    <div className="col-lg-12">
                       <div className="row">
                       <div className="col-lg-12 form-container p-4">
                            <h1 className="text-center mb-4">Edit Product</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="productName" className="form-label">Product Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="productName"
                                        placeholder="Enter product name"
                                        value={productName}
                                        onChange={(e) => setProductName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productDescription" className="form-label">Description:</label>
                                    <textarea
                                        className="form-control"
                                        id="productDescription"
                                        rows="3"
                                        placeholder="Enter product description"
                                        value={productDescription}
                                        onChange={(e) => setProductDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productPrice" className="form-label">Price:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="productPrice"
                                        placeholder="Enter product price"
                                        value={productPrice}
                                        onChange={(e) => setProductPrice(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productCategory" className="form-label">Category:</label>
                                    <select
                                        className="form-select"
                                        id="productCategory"
                                        value={productCategory}
                                        onChange={(e) => setProductCategory(e.target.value)}
                                        required
                                    >
                                        <option value="">Select category</option>
                                        <option value="Electronics">Electronics</option>
                                        <option value="Fashion">Fashion</option>
                                        <option value="Home">Home</option>
                                        <option value="Books">Books</option>
                                        <option value="Toys">Toys</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="productImage" className="form-label">Upload Image:</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="productImage"
                                        accept="image/*"
                                        onChange={(e) => setProductImage(e.target.files[0])}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Edit Product</button>
                            </form>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct
