import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/fsport-logo.jpg'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className='bg-color mt-2'>
            <div className='container'>
                
                <div className='row g-3 pt-4'>
                    <div className='col-md-4'>
                        <div>
                            <Link className="navbar-brand" to="/home"> <img className='img-fluid w-50' src={logo} alt="" /></Link>
                        </div>
                        <br />
                        <div className='icon'>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                        </div>
                        
                    </div>
                    <div className='col-md-3 footer-option'>
                        <p className='text-secondary' ><a href="/home">Home</a></p>
                        <p className='text-secondary' ><a href="/allProducts2">Bikes</a></p>
                        <p className='text-secondary' ><a href="/contact">Contact Us</a></p>
                        <p className='text-secondary' ><a href="/reviews">Send Feedback</a></p>
                    </div>
                    <div className='col-md-5'>
                        <h3 className='text-secondary'>Sign up for the newsletter</h3>
                        <input className='footer-input' type="text" placeholder='Email here'/>
                        <h3 className='mt-3'><i className="fas fa-phone-volume"></i> <small className='text-secondary'>+1 2 983 433 73 10</small></h3>
                        
                    </div>
                </div>
                <br />
                <br />
                <div>
                    <div className='text-center pb-3'>
                        <strong>COPYRIGHT © 2021. All Rights Reserved By FSPORTS</strong>
                        <br />
                        <small>Stay Safe & Keep Your Family Safe</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;