import React from 'react';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { RootCloseWrapper } from 'react-overlays';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default props => {
  const handleClick = (e) => {
    e.preventDefault();
    axios.get('/api/logout')
    .then(() => {
      browserHistory.push('/login');
    })
    .catch((err) => {
      console.log('inside the axios catch', err);
    });
  }
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Vineyard
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">View Data</NavItem>
            <NavItem eventKey={3} href="#">Check Alerts</NavItem>
            <NavItem eventKey={4} href="/form">Write Note</NavItem>
            <NavItem eventKey={5} href="/notesView">View Notes</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem href="/login">Login</NavItem>
            <NavItem href="/signup">Sign Up</NavItem>
            <NavItem onClick={handleClick} href="/logout">Log Out</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )};

