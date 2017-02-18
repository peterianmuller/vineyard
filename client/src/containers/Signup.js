import React from 'react';
import NameBirthdateInput from '../components/NameBirthdateInput';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';
import { handleItemChange } from '../helpers/changeHandlers';
import { setSignupItem } from '../actions/signup';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getPasswordValidationState() {
    if (this.props.signup.password === '' &&
        this.props.signup.confirm_password === '') return null;
    else if (this.props.signup.password !== this.props.signup.confirm_password) return 'error';
    else return 'success';
  }

  buttonStatus() {
    return !(this.props.signup.password === this.props.signup.confirm_password && 
      Object.keys(this.props.signup).reduce((acc, key)  => {
        return this.props.signup[key] !== '' && acc;
      }, true));
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
	    <Grid>
        <Row>
          <Col xsOffset={2} xs={8} mdOffset={4} md={4}>
            <h2>Sign up here!</h2>
          </Col>
        </Row>
	      <Row>
	        <Col xsOffset={2} xs={8} mdOffset={4} md={4}>
	          <Form>
	            <FormGroup>
	              <ControlLabel>Username</ControlLabel>
	              <FormControl 
	    						value={this.props.signup.username} 
	    						onChange={ handleItemChange.bind(null, setSignupItem, 'username') } 
	    						placeholder='Username' 
	    					/>
              </FormGroup>
              <FormGroup validationState={ this.getPasswordValidationState() }>
	              <ControlLabel>Password</ControlLabel>
	              <FormControl 
                  type='password'
	    						value={this.props.signup.password} 
	    						onChange={ handleItemChange.bind(null, setSignupItem, 'password') } 
	    						placeholder='Password' 
	    					/>
	              <ControlLabel>Confirm Password</ControlLabel>
	              <FormControl 
                  type='password'
	    						value={this.props.signup.confirm_password} 
	    						onChange={ handleItemChange.bind(null, setSignupItem, 'confirm_password') } 
	    						placeholder='Confirm password' 
	    					/>
	            </FormGroup>
	          </Form>
            <NameBirthdateInput
              setItem={ setSignupItem }
              signup={ this.props.signup }
            />
            <Button 
              bsStyle="primary" 
              bsClass="btn pull-right btn-primary"
              disabled={ this.buttonStatus() }>Submit</Button> 
	        </Col>
	      </Row>
	    </Grid>
    );
  }
}
