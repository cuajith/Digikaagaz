import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from 'react-router-dom';
import "./index.css"
import Productpage from './Components/Productpage';
import Solution from './Components/Solution';

const Navbar = () => {
    return (
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="#">DigiKaagaz</NavLink>
                                <button
                                    className="navbar-toggler"
                                    type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown">
                                            <NavLink
                                                className="nav-link dropdown-toggle"
                                                to="#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                product
                                            </NavLink>
                                            <ul className="dropdown-menu" id="dropdown-item1" aria-labelledby="navbarDropdown">
                                                <li> <Productpage/> </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink
                                                className="nav-link dropdown-toggle"
                                                to="#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                solution
                                            </NavLink>
                                            <ul className="dropdown-menu" id="dropdown-item2" aria-labelledby="navbarDropdown">
                                                <li> <Solution/></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="#">pricing</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink
                                                className="nav-link dropdown-toggle"
                                                to="#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Resource
                                            </NavLink>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
                                                <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink
                                                className="nav-link dropdown-toggle"
                                                to="#"
                                                id="navbarDropdown"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                company
                                            </NavLink>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><NavLink className="nav-link dropdown-item" to="#">Action</NavLink></li>
                                                <li><NavLink className="nav-item dropdown-item" to="#">Another action</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link sign" aria-current="page" to="/signin">sign in</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
    )
}

export default Navbar