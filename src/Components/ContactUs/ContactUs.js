import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className = 'container'>
            <div className="row">
            
                <div className="col-md-8">
                <div className='text-center my-5'>
                <h3>Get in Touch</h3>
                <small>We are available 24/7 by fax, e-mail or by phone. You can also use our quick contact form to ask a question about our services that we offer on a regular basis. We would be pleased to answer your questions.</small>
            </div>
            
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">NAME</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Enter your Name"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">PHONE</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Enter Phone"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">YOUR MESSAGE</label>
                        <textarea type="text" className="form-control text-area" id="inputAddress" placeholder="Write your message here"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">EMAIL</label>
                        <input type="email" className="form-control" id="inputCity" placeholder="Enter Email"/>
                    </div>
                    
                    <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn submit-btn" type="button">Send Message</button>
                    </div>
                </form>


                </div>
                <div className="col-md-4 my-5 list-design px-5">
                    <div>
                        <h4>FOLLOW US</h4>
                        <div className='icon'>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-facebook-square"></i></a>
                        </div>
                    </div>

                    <hr />

                    <div>
                        <h4>PHONE</h4>
                        <i className="fas fa-phone-alt"></i> &nbsp;&nbsp; <span>1-800-1218-326</span>
                    </div>

                    <hr />

                    <div>
                        <h4>ADDRESS</h4>
                        <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp; <span>267 Bongobondhu Avenue, Dhaka-1203 </span>
                    </div>

                    <hr />

                    <div>
                        <h4>OPENING HOURS</h4>
                        <i className="far fa-clock"></i> &nbsp;&nbsp; <span>9:00am - 23:00pm</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;