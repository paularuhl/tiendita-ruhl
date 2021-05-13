import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return(
        <Navbar className="navbar" fixed="top">
            <Navbar.Brand href="#index">      
                <h1>✨Ruhl's Top Five✨</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start text-grey">

            <Nav className="mr-5">
                <NavDropdown title="Bands"  id="basic-nav-dropdown" className="py-0 dropDown">
                    <a href="#"><p  className="dropItem" >Starset</p></a>
                     <a href="#"><p  className="dropItem" >Flyleaf</p></a>
                     <a href="#"><p  className="dropItem" >Paramore</p></a>
                     <a href="#"><p  className="dropItem" >Lydia</p></a>
                     <a href="#"><p  className="dropItem" >Periphery</p></a>
                </NavDropdown>
                <NavDropdown title="Albums" id="basic-nav-dropdown" className="py-0 dropDown">
                     <a href="#"><p  className="dropItem" >Divisions - Starset</p></a>
                     <a href="#"><p  className="dropItem" >Connector - I The Mighty</p></a>
                     <a href="#"><p  className="dropItem" >Peach Club - Emarosa</p></a>
                     <a href="#"><p  className="dropItem" >Of Beauty and Rage - Red</p></a>
                     <a href="#"><p  className="dropItem" >Riot - Paramore </p></a>
                </NavDropdown>
                
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
