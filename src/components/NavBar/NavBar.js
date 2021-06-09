import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';

const NavBar = () => {

    const categories = [
        { name: 'Music', uri: '/' },
        { name: 'About The Artists', uri: '/aboutArtists' },
        { name: 'About RUHL', uri: '/ruhl' }
    ];

    return (
        <header>
            <Navbar className='navbar' fixed='top'>
                <NavLink to={`/`}>
                    <Navbar.Brand href='#index' className='justify-content-center'>
                        <h3>🌹 Top Picks</h3>
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-center text-grey'>
                    
                        {categories.map(c => <Nav className='mr-5'> <NavLink to={c.uri}><p className="link"> {c.name} </p></NavLink> </Nav>)}

                    <Nav className="mr-5">
                        <p className="link" > <NavDropdown title="Categories" id="basic-nav-dropdown" >
                            <NavLink to={`/category/1`}><p className="link" >Female Lead</p></NavLink>
                            <NavLink to={`/category/2`}><p className="link" >Male Lead</p></NavLink>
                        </NavDropdown>
                        </p>
                    </Nav>

                </Navbar.Collapse>
                <NavLink to={`/cart`}><CartWidget /></NavLink>
            </Navbar>
        </header>
    );
}

export default NavBar;
