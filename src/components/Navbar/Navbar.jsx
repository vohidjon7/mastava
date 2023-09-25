import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='navbar'>
            <div className="nv_box1">
                <div className="container">
                    <div className="df">
                        <p>WELCOME TO BOOKSTORE</p>
                        <div className="nv_box1_1">
                            <div className="dropdown">
                                <button className="btn dr dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dollar(US)
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Dollar(US)</a></li>
                                    <li><a className="dropdown-item" href="#">Sum(UZB)</a></li>
                                    <li><a className="dropdown-item" href="#">Euro(EU)</a></li>
                                </ul>
                            </div>
                            <NavLink className='link' to={'/register'}>REGISTER</NavLink>
                            <NavLink className='link' to={'/login'}>LOGIN</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nv_box2">
                <div className="container">

                </div>
            </div>
        </div>
    );
}

export default Navbar;