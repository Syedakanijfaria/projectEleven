import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container p-4">
                <div className="row">
                    <div className="col-md-3 me-5">
                        <div className="left-container">
                            <h3>Opening Hours</h3>
                            <div>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Days</th>
                                            <th scope="col">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Sunday</th>
                                            <td>06.00-20.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Monday</th>
                                            <td>06.00-20.00</td>
                                        </tr>
                                        <tr className="table-light">
                                            <th scope="row">Tuesday</th>
                                            <td colSpan="2">06.00-20.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Wednesday</th>
                                            <td colSpan="2">06.00-20.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Thursday</th>
                                            <td colSpan="2">06.00-20.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Friday</th>
                                            <td colSpan="2">06.00-20.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Saturday</th>
                                            <td colSpan="2">06.00-20.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Usefull link in footer */}
                    <div className="col-md-4 ms-auto ps-5">
                        <div className="middle-container">
                            <h3>Usefull Links</h3>
                            <ul>
                                <li className="footer-menu">Home</li>
                                <li className="footer-menu">Services</li>
                                <li className="footer-menu">Package</li>
                                <li className="footer-menu">Trainers</li>
                                <li className="footer-menu"> About us</li>
                                <li className="footer-menu"> Login</li>
                            </ul>
                        </div>
                    </div>
                    {/* important contact information */}
                    <div className="col-md-4 ms-auto">
                        <div className="right-container">
                            <h3>Contact Us</h3>
                            <p className="footer-menu"><i className="fas fa-paper-plane"></i> powergymnster@email.com</p>
                            <p className="footer-menu"><i className="fas fa-reply"></i> powergymnster@info.com</p>
                            <p className="footer-menu"><i className="fas fa-tty"></i> +299 97 39 82 , 01737625446</p>

                            <p className="footer-menu"><i className="fas fa-map-marker-alt"></i> 76 Road Uttara, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                {/* social links */}
                <div className="text-center">
                    <h5>Social links</h5>
                    <i className="fab fa-facebook-square pe-2"></i>
                    <i className="fab fa-instagram pe-2"></i>
                    <i className="fab fa-linkedin pe-2"></i>
                    <i className="fab fa-twitter-square pe-2"></i>
                    <p><small>©2021 POWER GYMNSTER. All rights reserved</small></p>
                </div>
            </div>
        </div >
    );
};

export default Footer;