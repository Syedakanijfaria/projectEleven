import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import useAuth from '../../Hooks/useAuth.js';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="conatiner">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <p className="navbar-brand">
                        <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Extreme Traveler</p>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item m-2 p-2 text-decoration-none">
                                <NavLink className="text-decoration-none" to="/home">Home</NavLink>
                            </li>
                            {
                                user?.email ?
                                    <li className="nav-item m-2 p-2">
                                        <NavLink className="text-decoration-none" to="/myOrder">My Order</NavLink>
                                    </li>
                                    :
                                    <li className="nav-item m-2 p-2">
                                        <NavLink className="text-decoration-none" to="/login"></NavLink>
                                    </li>
                            }
                            {
                                user?.email ?
                                    <li className="nav-item m-2 p-2">
                                        <NavLink className="text-decoration-none" to="/ManageAllOrder">Manage All Order</NavLink>
                                    </li>
                                    :
                                    <li className="nav-item m-2 p-2">
                                        <NavLink className="text-decoration-none" to="/login"></NavLink>
                                    </li>
                            }
                            {
                                user?.email ?
                                    <li className="nav-item m-2 p-2">
                                        <NavLink className="text-decoration-none" to="/myOrder">Add A New Service</NavLink>
                                    </li>
                                    :
                                    <li className="nav-item m-2 p-2">
                                        <NavLink className="text-decoration-none" to="/login"></NavLink>
                                    </li>
                            }
                            {
                                user?.email ?
                                    <button onClick={logOut}> Log Out</button>
                                    :
                                    <li className="nav-item m-2 p-2">
                                        <NavLink className="text-decoration-none" to="/login">Login</NavLink>
                                    </li>
                            }
                            <p className="m-2 p-2">Name: {user?.displayName}</p>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;

