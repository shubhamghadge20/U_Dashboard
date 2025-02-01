import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Form } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import Support from './pages/Support';
import { ThemeContext } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <Router>
      <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"}>
        <Container>
          <Navbar.Brand as={Link} to="/">User Dashboard</Navbar.Brand>
          <Form.Check
            type="switch"
            id="dark-mode-switch"
            label="Dark Mode"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </Container>
      </Navbar>
      <div className="d-flex">
        <Sidebar />
        <Container className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
