import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap'; // Removed Collapse import
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaBox, FaCog, FaHeadset } from 'react-icons/fa';
import '../App.css'; // Make sure you import app.css here if it's not globally included.

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar bg-light border-end ${collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'}`}>
      <Nav className="flex-column p-3" style={{ height: '100vh' }}>
        <Nav.Item>
          <Nav.Link as={Link} to="/" className="sidebar-link">
            <FaTachometerAlt /> {!collapsed && 'Dashboard'}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/profile" className="sidebar-link">
            <FaUser /> {!collapsed && 'Profile'}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/orders" className="sidebar-link">
            <FaBox /> {!collapsed && 'Orders'}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/settings" className="sidebar-link">
            <FaCog /> {!collapsed && 'Settings'}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/support" className="sidebar-link">
            <FaHeadset /> {!collapsed && 'Support'}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Button 
            variant="link" 
            onClick={() => setCollapsed(!collapsed)} 
            className="sidebar-toggle"
          >
            {collapsed ? 'Expand' : 'Collapse'}
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
