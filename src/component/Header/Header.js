import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
    const [keySearch, setKeySearch] = useState();
    const navigate = useNavigate();
    const handleSearch = (e) => {
        if(e.keyCode === 13){
            navigate(`/search/${keySearch}`);
            setKeySearch();
        }
    }
    return (
        <Navbar expand="lg" className="bg-body-dark">
            <Container>
                <Navbar.Brand href="#">
                    <img src="https://react-film-clone.vercel.app/img/logo.svg" alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <NavLink to="/" className="text-white">
                            Home
                        </NavLink>
                        <NavLink to="/list-movie" className="text-white">
                            Movies
                        </NavLink>
                    </Nav>
                    <div className="d-flex">
                        <Form.Control type="search" placeholder="Search for a movie" className="me-2" aria-label="Search" onChange={(e)=>setKeySearch(e.target.value)} onKeyDown={handleSearch}/>
                        <Button variant="outline-success">Search</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
