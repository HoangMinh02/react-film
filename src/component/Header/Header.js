import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
    const [keySearch, setKeySearch] = useState();
    const navigate = useNavigate();
    const handleSearch = (e) => {
        if(e.keyCode === 13){
            navigate(`/search/${keySearch}`);
            setKeySearch(""); // truyền value vào search
        }
    }
    return (
        <div className="header">
            <Navbar expand="lg" className="bg-body-dark">
                <Container>
                    <Navbar.Brand href="#">
                        <NavLink to="/">
                            <img src="https://react-film-clone.vercel.app/img/logo.svg" alt="" />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="choice me-auto my-5 my-lg-0" navbarScroll>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/list-movie">Movies</NavLink>
                        </Nav>
                        <div className="search d-flex">
                            <Form.Control 
                                type="search" 
                                value={keySearch}
                                placeholder="Search for a movie" 
                                className="inputSearch me-2" 
                                aria-label="Search" 
                                onChange={(e)=>setKeySearch(e.target.value)} 
                                onKeyDown={handleSearch}
                            />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
