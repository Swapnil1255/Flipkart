import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <div id="main">
                <div className="container-fluid">
                    <header>
                        <Link to={'/'}>
                            <div className="home">
                                <img src="https://i.ibb.co/jZ6z644/flipkart-logo.png" alt="main_logo" />
                            </div>
                        </Link>
                        <div className="search_bar">
                            <form>
                                <input type="search" name="product" outline="none" placeholder="Search for products ,brands and more"/>
                                <button type="submit"><img src="https://i.ibb.co/8mQS1GF/icons8-search-150.png" alt='search'/></button>
                            </form>

                        </div>
                        <div className="login">
                            <button type="submit" name="login" value="login">Login</button>
                            <div id="login_options">
                                <a href="">New Customer?</a>
                                <a href="">My Profile</a>                                    
                                <a href="">Flipkart Plus Zone</a>
                                <a href="">Wishlist</a>
                                <a href="">Orders</a>
                                <a href="">Rewards</a>
                                <a href="">Gift Cards</a>
                            </div>

                        </div>
                        <nav>
                            <ul>
                                <li>Become Seller</li>
                                <li id="more">More 
                                    <img src="https://i.ibb.co/rsyQM2z/up-arrow.png" alt="arrow" />
                                    <div className="more_options">
                                        <a href="">Notification Prefrence</a>
                                        <hr></hr>
                                        <a href="">24*7 Customer support</a>
                                        <hr></hr>
                                        <a href="">Advertisement</a>
                                        <hr/>
                                        <a href="">Download </a>
                                    </div>
                                </li>
                                <li><a href="" style={{textDecoration:'none',color:'white'}}><img src="https://i.ibb.co/q7LvhBG/shopping-cart.png" alt="cart" style={{width:'15px',Hight:'15px', fontWeight:500}}/> Cart</a></li>
                            </ul>
                        </nav>
                    
                        

                        
                    </header>
                </div>
            </div>

  
        </>
    )
}

export default Header;

