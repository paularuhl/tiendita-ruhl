import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Navbar className="navbar" fixed="top">
            <Navbar.Brand href="#index" className="justify-content-center">
                    <h4>🌹 Top Picks</h4>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center text-grey">
                <Nav className="mr-5">
                        <p className="dropItem" > <a href="#">Bands </a></p>
                        <p className="dropItem" > <a href="#">Albums </a></p>
                        <p className="dropItem" > <a href="#">Music Videos </a></p>
                        <p className="dropItem" > <a href="#">Singles </a></p>
                        <p className="dropItem" > <a href="#">Related Stuff </a></p>
                </Nav>
            </Navbar.Collapse>
            <CartWidget />
        </Navbar>
    );
}

export default NavBar;
