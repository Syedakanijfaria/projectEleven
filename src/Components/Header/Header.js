import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import useAuth from '../../Hooks/useAuth.js';
import logo from "../../Image/logo/logo.png";

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
                        <img src={logo} alt="" className="d-inline-block align-text-top" />
                        Extreme Traveler Check</p>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item m-2 p-2 text-decoration-none">
                                <button className="btn btn-danger"><NavLink className="text-decoration-none" to="/home">Home</NavLink></button>
                            </li>
                            {
                                user?.email ?
                                    <li className="nav-item m-2 p-2">
                                        <button className="btn btn-danger"><NavLink className="text-decoration-none" to="/myOrder/:user.email">My Order</NavLink></button>
                                    </li>
                                    :
                                    <li className="nav-item m-2 p-2">
                                        <NavLink className="text-decoration-none" to="/login"></NavLink>
                                    </li>
                            }
                            {
                                user?.email ?
                                    <li className="nav-item m-2 p-2">
                                        <button className="btn btn-danger"><NavLink className="text-decoration-none" to="/ManageAllOrder">Manage All Order</NavLink></button>
                                    </li>
                                    :
                                    <li className="nav-item m-2 p-2">
                                        <NavLink className="text-decoration-none" to="/login"></NavLink>
                                    </li>
                            }
                            {
                                user?.email ?
                                    <li className="nav-item m-2 p-2">
                                        <button className="btn btn-danger"><NavLink className="text-decoration-none" to="/addNewService">Add A New Service</NavLink></button>
                                    </li>
                                    :
                                    <li className="nav-item m-2 p-2">
                                        <NavLink className="text-decoration-none" to="/login"></NavLink>
                                    </li>
                            }
                            {
                                user?.email ?
                                    <button className="btn" onClick={logOut}> Log Out</button>
                                    :
                                    <li className="nav-item m-2 p-2">
                                        <button className="btn btn-danger"><NavLink className="text-decoration-none" to="/login">Login</NavLink></button>
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

