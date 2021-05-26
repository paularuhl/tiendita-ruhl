import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';

const NavBar = () => {
    return (
        <Navbar className="navbar" fixed="top">
            <Navbar.Brand href="#index" className="justify-content-center">
                    <h4>🌹 Top Picks</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center text-grey">
                <Nav className="mr-5">
                        <p> <a href="#">Bands </a></p>
                        <p> <a href="#">Albums </a></p>
                        <p> <a href="#">Related Stuff </a></p>
                </Nav>
            </Navbar.Collapse>
            <CartWidget />
        </Navbar>
    );
}

export default NavBar;
