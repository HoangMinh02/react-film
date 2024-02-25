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
                    <Nav 
                    className="justify-content-center flex-grow-1 pe-3" 
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <NavLink to="/" className="text-white me-4">
                        Home
                    </NavLink>
                    <NavLink to="/list-movie" className="text-white">
                        Movies
                    </NavLink>
                    </Nav>
                    <div className="d-flex">
                        <Form.Control 
                            type="search" 
                            placeholder="Search for a movie" 
                            className="me-2 rounded-pill border border-warning border-3  " 
                            aria-label="Search" 
                            onChange={(e)=>setKeySearch(e.target.value)} 
                            onKeyDown={handleSearch}
                        />
                        <i className="fa-solid fa-magnifying-glass" style={{color: "#FFD43B",}}></i>
                    </div>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
