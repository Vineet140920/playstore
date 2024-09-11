import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa'; // Import PlayStore icon from react-icons

const AppNavbar = ({ isLoggedIn, isOwner }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">
                <FaPlay size={50} style={{ marginRight: '8px', backgroundColor: 'gainsboro',color:'red' }} /> {/* Use the icon */}
                PlayStore
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    {!isLoggedIn && (
                        <>
                            <Nav.Link as={Link} to="/owner-auth">Owner Login</Nav.Link>
                            <Nav.Link as={Link} to="/user-auth">User Login</Nav.Link>
                        </>
                    )}
                    {isOwner && (
                        <Nav.Link as={Link} to="/applications">Manage Applications</Nav.Link>
                    )}
                    {!isOwner && isLoggedIn && (
                        <Nav.Link as={Link} to="/user-applications">User Applications</Nav.Link>
                    )}
                </Nav>
                {isLoggedIn && (
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" onClick={() => window.location.reload()}>Logout</Nav.Link>
                    </Nav>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default AppNavbar;
