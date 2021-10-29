import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="conatiner">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                        Extreme Traveler</a>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item m-2 p-2 text-decoration-none">
                                <NavLink className="text-decoration-none" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item m-2 p-2">
                                <NavLink className="text-decoration-none" to="/offers">Offers</NavLink>
                            </li>
                            <li className="nav-item m-2 p-2">
                                <NavLink className="text-decoration-none" to="/offers">Offers</NavLink>
                            </li>
                            <li className="nav-item m-2 p-2">
                                <NavLink className="text-decoration-none" to="/offers">Offers</NavLink>
                            </li>
                            <li className="nav-item m-2 p-2">
                                <NavLink className="text-decoration-none" to="/offers">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

