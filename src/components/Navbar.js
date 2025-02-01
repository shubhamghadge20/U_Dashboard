import React, { useContext } from 'react';
import { Navbar, Container, Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <Navbar bg={darkMode ? 'dark' : 'primary'} variant={darkMode ? 'dark' : 'light'} expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase text-light">
          User Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Form.Check
              type="switch"
              id="dark-mode-switch"
              label={darkMode ? <FaSun /> : <FaMoon />}
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="d-flex align-items-center text-light"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
