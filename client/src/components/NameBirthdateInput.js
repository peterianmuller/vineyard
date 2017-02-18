import React from 'react';
import { Col, ControlLabel, Form, FormControl, FormGroup, Row } from 'react-bootstrap'; 
import { handleItemChange } from '../helpers/changeHandlers';

export default props => (
  <FormGroup>
    <Row>
      <Col xs={12}>
	      <ControlLabel>Email address</ControlLabel>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
	      <FormControl 
          bsClass="form-control multiColumnInput"
					value={props.signup.email} 
					onChange={ handleItemChange.bind(null, props.setItem, 'email') } 
					placeholder='Email' 
				/>
      </Col>
    </Row>
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
	  	  	onChange={ handleItemChange.bind(null, props.setItem, 'first_name') } 
	  	  	placeholder='First Name' 
	  	  />
      </Col>
      <Col xs={6}>
        <FormControl 
          bsClass="form-control multiColumnInput"
	  	  	value={props.signup.lastName} 
	  	  	onChange={ handleItemChange.bind(null, props.setItem, 'last_name') } 
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
	  	  	onChange={ handleItemChange.bind(null, props.setItem, 'birth_day') } 
	  	  	placeholder='Day' 
	  	  />
      </Col>
      <Col xs={4}>
        <FormControl 
          bsClass="form-control multiColumnInput"
	  	  	value={props.signup.birthMonth} 
	  	  	onChange={ handleItemChange.bind(null, props.setItem, 'birth_month') } 
	  	  	placeholder='Month' 
	  	  />
      </Col>
      <Col xs={4}>
        <FormControl 
          bsClass="form-control multiColumnInput"
	  	  	value={props.signup.birthYear} 
	  	  	onChange={ handleItemChange.bind(null, props.setItem, 'birth_year') } 
	  	  	placeholder='Year' 
	  	  />
      </Col>
    </Row>
  </FormGroup>
);
