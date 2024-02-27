import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <Navbar expand="lg" className="footer bg-body-dark">
                <Container>
                    <div className="info">
                        <div className="logo">
                            <Navbar.Brand href="#">
                                <NavLink to="/">
                                    <img src="https://react-film-clone.vercel.app/img/logo.svg" alt="" />
                                </NavLink>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="choice" navbarScroll>
                                    <NavLink to="/">Home</NavLink>
                                    <NavLink to="/list-movie">Movies</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                        <div className="desc">
                            <p>
                                &#169; 2023 <span>Filmlane</span>.All Rights Reserved by <span>HoangMinh</span>
                            </p>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;