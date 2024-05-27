import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShowProduct({ allProduct, editProduct, deleteProduct }) {

    return (
        <div className="container mt-5">
            <div className="row">
                {allProduct.map((product, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card position-relative">
                            {product.productImage && (
                                <img
                                    src={URL.createObjectURL(product.productImage)}
                                    className="card-img-top productImage"
                                    alt={product.productName}
                                />
                            )}
                            <div className="dropdown position-absolute icon-dropdown">
                                <FaEllipsisV
                                    className="text-secondary"
                                    style={{ cursor: 'pointer' }}
                                    id={`dropdownMenuButton${index}`}
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                />
                                <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton${index}`}>
                                    <li>
                                        <Link to={`/edit/${product.id}`}>
                                            <FaEdit
                                                className="text-primary dropdown-item"
                                                style={{ cursor: 'pointer' }}
                                            />
                                        </Link>
                                    </li>
                                    <li>
                                        <FaTrashAlt
                                            className="text-danger dropdown-item"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => deleteProduct(index)}
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{product.productName}</h5>
                                <p className="card-text">{product.productDescription}</p>
                                <p className="card-text"><strong>Price:</strong> ${product.productPrice}</p>
                                <p className="card-text"><strong>Category:</strong> {product.productCategory}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShowProduct;
