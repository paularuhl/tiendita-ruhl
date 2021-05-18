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
                        <a href="#"><p className="dropItem text-decoration: none;" >Bands</p></a>
                        <a href="#"><p className="dropItem text-decoration: none;" >Albums</p></a>
                        <a href="#"><p className="dropItem text-decoration: none;" >Music Videos</p></a>
                        <a href="#"><p className="dropItem text-decoration: none;" >Singles</p></a>
                        <a href="#"><p className="dropItem text-decoration: none;" >Related Stuff</p></a>
                </Nav>
            </Navbar.Collapse>
            <CartWidget />
        </Navbar>
    );
}

export default NavBar;
