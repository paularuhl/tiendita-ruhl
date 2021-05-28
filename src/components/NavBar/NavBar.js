import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.scss';

const NavBar = () => {

    const [categories, setCategories] = useState([
        { name: 'Music', uri: '/' },
        { name: 'About The Artists', uri: '/aboutArtists' },
        { name: 'About RUHL', uri: '/ruhl' }
    ]);

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
                    <Nav className='mr-5'>
                        {categories.map(c => <NavLink to={c.uri}><p className="link"> <a  href='#'> {c.name} </a></p></NavLink>)}
                    </Nav>
                </Navbar.Collapse>
                <NavLink to={`/cart`}><CartWidget /></NavLink>
            </Navbar>
        </header>
    );
}

export default NavBar;
