import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="left-container">
                            <h3>Extreme Traveler</h3>
                            <div>
                                <p>Extreme Traveler is equipped with everythig required for an amazing tour. Set up a tour and our service now.</p>
                                <br />
                                <h3>Follow Us</h3>
                                <i className="fab fa-facebook-square pe-2"></i>
                                <i className="fab fa-instagram pe-2"></i>
                                <i className="fab fa-linkedin pe-2"></i>
                                <i className="fab fa-twitter-square pe-2"></i>
                            </div>
                        </div>
                    </div>

                    {/* important contact information */}
                    <div className="col-md-3">
                        <div className="firstmiddle-container">
                            <h3>Contact Us</h3>
                            <p className="footer-menu"><i className="fas fa-paper-plane"></i> powergymnster@email.com</p>
                            <p className="footer-menu"><i className="fas fa-reply"></i> powergymnster@info.com</p>
                            <p className="footer-menu"><i className="fas fa-tty"></i> +299 97 39 82 , 01737625446</p>

                            <p className="footer-menu"><i className="fas fa-map-marker-alt"></i> 76 Road Uttara, Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    {/* Usefull link in footer */}
                    <div className="col-md-3">
                        <div className="lastmiddle-container">
                            <h3 className="">Links</h3>
                            <ul>
                                <li className="footer-menu">Home</li>
                                <li className="footer-menu">Services</li>
                                <li className="footer-menu">Package</li>
                                <li className="footer-menu"> Login</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="last-container">
                            <h3>Pay Safely</h3>
                            <p>Eiusmod tempor incididunt utbor etian dolm magna aliqua enim minim</p>

                        </div>
                    </div>

                    <hr></hr>
                    {/* social links */}
                    <div className="text-center">
                        <p><small>©2021 POWER GYMNSTER. All rights reserved</small></p>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Footer;