// import React from 'react'
import React, { useState, useEffect } from 'react';


function EventHandling({ products }) {
    const [logIn, setLogIn] = useState(localStorage.getItem('loggedIn') === 'true');

    useEffect(() => {
        // Save the logged-in state to localStorage
        localStorage.setItem('loggedIn', logIn);
    }, [logIn]);

    function handleIn() {
        let email = document.getElementById("logInmail").value
        let password = parseInt(document.getElementById("logInps").value)
        if (email === 'riddhie@gmail.com' && password === 123) {
            setLogIn(true);
            alert("LogIn successfully!  Welcome to the world of TITAN !")
        }
        else {
            alert("Please enter valid ID & Password !")
        }
    }

    function handleOut() {
        setLogIn(false);
    }

    return (
        <div>
            {
                logIn ? (
                    <>
                        {/* LogIn page  */}

                        <header>
                            <div className='container-fluid border shadow-lg mb-3'>
                                <div className="row justify-content-evenly align-items-center">
                                    <div className="col-lg-2">
                                        <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb6d5816b/images/homepage/titan-logo.svg" alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="search" placeholder='search...' className='form-control' />
                                    </div>
                                    <div className="col-lg-3 d-flex justify-content-evenly align-items-center text-center">
                                        <div class="dropdown">
                                            <button class="dropdown-toggle border border-none bg-transparent" type="" data-bs-toggle="dropdown" aria-expanded="false">
                                                <h5>
                                                    <img src="https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dw8baf972a/images/headerAccount.svg" alt="" />
                                                    <h6>Account</h6>
                                                </h5>
                                            </button>
                                            <ul class="dropdown-menu" id='drop'>
                                                <div className=' m-auto main p-2' id='logIn'>
                                                    {/* <div className='text-center d-flex flex-direction p-3'> */}
                                                    <p>WishList</p>
                                                    <p>eGift Cards</p>
                                                    <p>Find a store</p>
                                                    <p>Help & Contact</p>
                                                    <p>FAQ</p>
                                                    <li><hr class="dropdown-divider" /></li>
                                                    <h6>Want to Log out?</h6>
                                                    <button className="btn border fs-5 text-white btn-danger mt-2" onClick={handleOut}>Log Out</button>
                                                    {/* </div> */}
                                                </div>
                                            </ul>
                                        </div>
                                        <h5>
                                            <img src="https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dw21827044/images/headerWishlist.png" alt="" className='w-50' />
                                            <h6>Wishlist</h6>
                                        </h5>
                                        <h5>
                                            <img src="https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dw8cb64fa1/images/headerCart.svg" alt="" />
                                            <h6>Cart</h6>
                                        </h5>
                                        <h5>
                                            <img src="https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dwc443c5a1/images/icon-track-order-desktop.svg" alt="" />
                                            <h6 className='mt-1'>Track order</h6>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10 d-flex justify-content-evenly" id='text-deco'>
                                        <a href="">MEN</a>
                                        <a href="">WOMEN</a>
                                        <a href="">SMART WATCHES</a>
                                        <a href="">PREMIUM WATCHES</a>
                                        <a href="">ALL WATCHES</a>
                                        <a href="">INTERNATIONAL BRANDS</a>
                                        <a href="">GIFTING</a>
                                        <a href="">SALE</a>
                                        <a href="">MORE</a>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className='all-watches'>
                            <div className='container-fluid'>
                                <div className="row">
                                    <div className="col-lg-12 p-4">
                                        <p><img src="https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dw1ac85dfd/images/profile-lc.svg" alt="" />Select a location to see product availablity</p>
                                    </div>
                                    <div className="col-lg-12 ps-4">
                                        <nav aria-label="breadcrumb">
                                            <ol className='breadcrumb'>
                                                <li className='breadcrumb-item'><a href="#" className='text-decoration-none text-secondary'>Home</a></li>
                                                <li className='breadcrumb-item active text-black' aria-current="page">Watches</li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div className="col-lg-12 d-flex justify-content-evenly mb-4">
                                        <div>
                                            <img src="https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dw437eafb3/images/plp/plp-book-an-appointment.svg" alt="" /> Book an Appointment
                                        </div>
                                        <div>
                                            <img src="https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dw86087b80/images/plp/plp-buywith-nocostemi.svg" alt="" /> Buy With No Cost EMI
                                        </div>
                                        <div>
                                            <img src="https://www.titan.co.in/on/demandware.static/Sites-Titan-Site/-/default/dw382b71b0/images/plp/plp-pickupat-store.png" alt="" style={{ width: "25px" }} /> Pickup At The Store
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-4">
                                                <div className="row">
                                                    <div className="col-lg-3">
                                                        <h6 className='ms-4'>Filter By <br />Brands</h6>
                                                    </div>
                                                    <div className="col-lg-9" id='type'>
                                                        <button className='btn border'>Titan</button>
                                                        <button className='btn border ms-3'>Sonata</button>
                                                        <button className='btn border ms-3'>Fastrack</button>
                                                        <button className='btn border ms-3'>SF</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-2">
                                                <select name="" id="sortsec" className='pe-5 border shadow-sm p-2 rounded '>
                                                    <option value="">Add filter</option>
                                                    <option value="High">High to Low</option>
                                                    <option value="Low">Low to High</option>
                                                    <option value="a to z">A to Z</option>
                                                    <option value="z to a">Z to A</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 d-flex flex-wrap justify-content-evenly'>
                                        {
                                            products.map(product => (
                                                <div className='product-page mb-4 p-2'>
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

                ) : (

                    <div>
                        <div className='container-fluid d-flex align-items-center justify-content-center' style={{ height: "100vh" }} id='main-page'>
                            <div className='row justify-content-center' style={{ width: "100%" }}>
                                <div className='col-lg-4' id='login-border'>
                                    <div className='row' id='bg-img'>
                                        <div className='col-lg-12'>
                                            <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwb6d5816b/images/homepage/titan-logo.svg" alt="" className='logo' />
                                        </div>
                                        <div className='col-lg-12 p-0'>
                                            <img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwdf82e3eb/images/login/Coupons.svg" alt="" />
                                        </div>
                                        <div className='col-lg-12 p-0'>
                                            <img src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwe7d13dea/images/BRANDLD.jpg" alt="" className='w-100' />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 pt-4 ps-5 pe-5 bg-white' id='log'>
                                    <h4>Login</h4>
                                    <h5 className='mt-2 mb-4'>Please enter your registered mobile number to login via OTP</h5>
                                    <input type="email" placeholder='Email' className='form-control mb-3' id='logInmail' />
                                    <input type="password" placeholder='Password' className='form-control mb-3' id='logInps' />
                                    <div class="input-group mb-3 border">
                                        <button type="button" class="btn d-flex pe-4"><img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwa85a2882/images/flags/in.svg" alt="" className='pe-2' /> +91 </button>
                                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul class="dropdown-menu" id='country'>
                                            <li><a class="dropdown-item" href="#"><img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dwa85a2882/images/flags/in.svg" alt="" className='pe-2' /> +91 India</a></li>
                                            <li><a class="dropdown-item" href="#"><img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw39501bb6/images/flags/au.svg" alt="" className='pe-2' /> +61 Australia</a></li>
                                            <li><a class="dropdown-item" href="#"><img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw9368097a/images/flags/bh.svg" alt="" className='pe-2' /> +973 Bahrain</a></li>
                                            <li><a class="dropdown-item" href="#"><img src="https://www.titan.co.in/on/demandware.static/-/Library-Sites-TitanSharedLibrary/default/dw54c35c9b/images/flags/ca.svg" alt="" className='pe-2' /> +1 Canada</a></li>
                                        </ul>
                                        <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" />
                                    </div>
                                    <button className='btn border continue-btn fs-5 mt-3 mb-5' type='submit' onClick={handleIn}>Log In</button>
                                    <p className='text-secondary text-center paragraph'>By continuing, I agree with Titan’s <br />
                                        <a href="" className='text-dark'>Terms Of Service</a> and <a href="" className='text-dark'>Privacy Policies</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default EventHandling