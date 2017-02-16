import React from 'react';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { RootCloseWrapper } from 'react-overlays';

export default class NavBar extends React.Component {
  handleSelect(e) {
    e.stopPropagation();
  }

  render() {
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
              <NavItem eventKey={4} href="#">Write Note</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem href="#">Login</NavItem>
              <NavItem href="#">Register</NavItem>
              <NavItem href="#">Log Out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
