import React from 'react';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';
import { handleItemChange } from '../helpers/changeHandlers';
import { setSignupItem } from '../actions/signup';

export default props => (
	<Grid>
    <Row>
      <Col xsOffset={2} xs={8} mdOffset={4} md={4}>
        <h2>Sign up here!</h2>
      </Col>
    </Row>
	  <Row>
	    <Col xsOffset={2} xs={8} mdOffset={4} md={4}>
	      <Form>
	        <FormGroup >
	          <ControlLabel>Username</ControlLabel>
	          <FormControl 
							value={props.signup.username} 
							onChange={ handleItemChange.bind(null, setSignupItem, 'username') } 
							placeholder='Username' 
						/>
	          <ControlLabel>Email address</ControlLabel>
	          <FormControl 
							value={props.signup.email} 
							onChange={ handleItemChange.bind(null, setSignupItem, 'email') } 
							placeholder='Email' 
						/>
	          <ControlLabel>Password</ControlLabel>
	          <FormControl 
              type='password'
							value={props.signup.password} 
							onChange={ handleItemChange.bind(null, setSignupItem, 'password') } 
							placeholder='Password' 
						/>
	          <ControlLabel>Confirm Password</ControlLabel>
	          <FormControl 
              type='password'
							value={props.signup.confirmPassword} 
							onChange={ handleItemChange.bind(null, setSignupItem, 'confirm_password') } 
							placeholder='Confirm password' 
						/>
	        </FormGroup>
	      </Form>
        <Form inline>
          <Row>
            <Col xs={6} md={6}>
	            <ControlLabel>First name</ControlLabel>
            </Col>
            <Col xs={6} md={6}>
	            <ControlLabel>Last name</ControlLabel>
            </Col>
            <Col xs={6}>
	            <FormControl 
                bsClass="form-control multiColumnInput"
						  	value={props.signup.firstName} 
						  	onChange={ handleItemChange.bind(null, setSignupItem, 'first_name') } 
						  	placeholder='First Name' 
						  />
            </Col>
            <Col xs={6}>
	            <FormControl 
                bsClass="form-control multiColumnInput"
						  	value={props.signup.lastName} 
						  	onChange={ handleItemChange.bind(null, setSignupItem, 'last_name') } 
						  	placeholder='Last Name' 
						  />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <ControlLabel>Birthdate</ControlLabel>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
	            <FormControl 
                bsClass="form-control multiColumnInput"
						  	value={props.signup.birthDay} 
						  	onChange={ handleItemChange.bind(null, setSignupItem, 'birth_day') } 
						  	placeholder='Day' 
						  />
            </Col>
            <Col xs={4}>
	            <FormControl 
                bsClass="form-control multiColumnInput"
						  	value={props.signup.birthMonth} 
						  	onChange={ handleItemChange.bind(null, setSignupItem, 'birth_month') } 
						  	placeholder='Month' 
						  />
            </Col>
            <Col xs={4}>
	            <FormControl 
                bsClass="form-control multiColumnInput"
						  	value={props.signup.birthYear} 
						  	onChange={ handleItemChange.bind(null, setSignupItem, 'birth_year') } 
						  	placeholder='Year' 
						  />
            </Col>
          </Row>
        </Form>
        <Button 
          bsStyle="primary" 
          disabled={ 
            props.signup.password === props.signup.confirm_password 
              && props.signup.password != '' ? 
                false : 
                true }>Submit</Button> 
	    </Col>
	  </Row>
	</Grid>
);
