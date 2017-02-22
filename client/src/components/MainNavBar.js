import React from 'react';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
          { props.auth.username ? 
            (
              <Nav>
                <LinkContainer to='/home'>
                  <NavItem eventKey={1}>Home</NavItem>
                </LinkContainer>
                <LinkContainer to='/data/view'>
                  <NavItem eventKey={2}>View Data</NavItem>
                </LinkContainer>
                <LinkContainer to='/alerts'>
                  <NavItem eventKey={3}>Check Alerts</NavItem>
                </LinkContainer>
                <LinkContainer to='/form'>
                  <NavItem eventKey={4}>Write Note</NavItem>
                </LinkContainer>
                <LinkContainer to='/notesView'>
                  <NavItem eventKey={5}>View Notes</NavItem>
                </LinkContainer>
              </Nav>
            ) : ''
          }
          <Nav pullRight>
            { props.auth.username ? 
              (
                <LinkContainer to='/logout'>
                  <NavItem onClick={handleClick}>Log Out</NavItem>
                </LinkContainer>
              ) : 
              (
                <LinkContainer to='/login'>
                  <NavItem>Login</NavItem>
                </LinkContainer>
              )
            }
            { props.auth.username ? '' : 
              (
                <LinkContainer to='/signup'>
                  <NavItem>Sign Up</NavItem>
                </LinkContainer>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )};

