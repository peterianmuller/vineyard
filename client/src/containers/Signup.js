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
    console.log('button clicked');
    alert('uhhuhuhuh');
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
            <Form inline onSubmit={ this.handleSubmit }>
	            <FormGroup bsClass='multiColumnInput'>
                <Row>
                  <Col xs={12}>
	                  <ControlLabel bsClass='control-label multiColumnInput'>Username</ControlLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
	                  <FormControl 
	    					    	value={this.props.signup.username} 
	    					    	onChange={ handleItemChange.bind(null, setSignupItem, 'username') } 
	    					    	placeholder='Username' 
                      bsClass='form-control multiColumnInput'
	    					    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup bsClass='multiColumnInput' validationState={ this.getPasswordValidationState() }>
                <Row>
                  <Col xs={12}>
	                  <ControlLabel bsClass='control-label multiColumnInput'>Password</ControlLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
	                  <FormControl 
                      type='password'
	    					    	value={this.props.signup.password} 
	    					    	onChange={ handleItemChange.bind(null, setSignupItem, 'password') } 
	    					    	placeholder='Password' 
                      bsClass='form-control multiColumnInput'
	    					    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
	                  <ControlLabel bsClass='control-label multiColumnInput'>Confirm Password</ControlLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
	                  <FormControl 
                      type='password'
	    					    	value={this.props.signup.confirm_password} 
	    					    	onChange={ handleItemChange.bind(null, setSignupItem, 'confirm_password') } 
	    					    	placeholder='Confirm password' 
                      bsClass='form-control multiColumnInput'
	    					    />
                  </Col>
                </Row>
	            </FormGroup>
              <NameBirthdateInput
                setItem={ setSignupItem }
                signup={ this.props.signup }
              />
              <Button 
                bsStyle="primary" 
                bsClass="btn pull-right btn-primary buttonWithMargin"
                disabled={ this.buttonStatus() }
                type='submit'
              >
                Submit
              </Button> 
	          </Form>
	        </Col>
	      </Row>
	    </Grid>
    );
  }
}
