import React from 'react';
import NameBirthdateInput from '../components/NameBirthdateInput';
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
        <NameBirthdateInput
          setItem={ setSignupItem }
          signup={ props.signup }
        />
        <Button 
          bsStyle="primary" 
          bsClass="btn pull-right btn-primary"
          disabled={ 
            props.signup.password === props.signup.confirm_password 
              && props.signup.password != '' ? 
                false : 
                true }>Submit</Button> 
	    </Col>
	  </Row>
	</Grid>
);
