// import React from 'react'
import React, { useState, useEffect } from 'react';


function EventHandling({ products }) {
    const [logIn, setLogIn] = useState(localStorage.getItem('loggedIn') === 'true');

    useEffect(() => {
        // Save the logged-in state to localStorage
        localStorage.setItem('loggedIn', logIn);
    }, [logIn]);

    function handleIn() {
        // let email = document.getElementById("logInmail").value
        // let password = parseInt(document.getElementById("logInps").value)
        // if (email === 'riddhie@gmail.com' && password === 123) {
            setLogIn(true);
        //     alert("LogIn successfully!  Welcome to the world of TITAN !")
        // }
        // else {
        //     alert("Please enter valid ID & Password !")
        // }
    }

    function handleOut() {
        setLogIn(false);
    }

    // {
    //     let sortproduct = document.getElementById("sortsec")
    //     sortproduct.addEventListener("change", () => {
    //         let selectedproduct = sortproduct.value

    //         let selectedproductvalue = []

    //         if (selectedproduct === "High") {
    //             selectedproductvalue = products.slice().sort((a, b) => b.price - a.price)
    //         }
    //         else if (selectedproduct === "Low") {
    //             selectedproductvalue = products.slice().sort((a, b) => a.price - b.price)
    //         }
    //         else if (selectedproduct === "a to z") {
    //             selectedproductvalue = products.slice().sort((a, b) => a.title.localeCompare(b.title))
    //         }
    //         else if (selectedproduct === "z to a") {
    //             selectedproductvalue = products.slice().sort((a, b) => b.title.localeCompare(a.title))
    //         }
    //         else {
    //             selectedproductvalue = products.slice()
    //         }

    //         // product(selectedproductvalue)
    //     })
    // }

    return (
        <div>
            {
                    <>
                        {/* LogIn page  */}


                        <div className='all-watches'>
                            <div className='container-fluid'>
                                <div className="row">
                                    
                                    <div className='col-lg-12 d-flex flex-wrap justify-content-evenly' id='product'>
                                        {
                                            products.map(product => (
                                                <div className='product-page mb-4 p-2' >
                                                    <div key={product.id}>
                                                        <img src={product.image} alt={product.title} className='w-100' />
                                                        <h6>{product.title}</h6>
                                                        <p className='text-secondary'>{product.categories}</p>
                                                        <h5>{product.price}</h5>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>

                }
        </div>
    );
}

export default EventHandling
