//React requirements
import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

//UI
import { Form } from 'semantic-ui-react';

//Components
import NameBirthdateInput from '../components/NameBirthdateInput';

//Actions and Functions
import { setSignupItem, signup } from '../actions/signup';
import { genDropdownOptions } from '../helpers/lifeHax';
import { handleItemChange } from '../helpers/changeHandlers';

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

  handleDropdownChange(e, { value }) {
    this.props.dispatch(setSignupItem('account_restrictions', value));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.dispatch(signup(this.props.signup));
  }

  render() {
    return (
      <div className='oneEm max500width'>
        <h2>Sign up here!</h2>

        <Form onSubmit={ this.handleSubmit.bind(this) }>
	        <Form.Input
            label="Username"
	      	 	value={this.props.signup.username}
	      	 	onChange={ handleItemChange.bind(null, setSignupItem, 'username') }
	      	 	placeholder='Username'
	      	/>
	        <Form.Input
            label='Password'
            type='password'
	      	 	value={this.props.signup.password}
	      	 	onChange={ handleItemChange.bind(null, setSignupItem, 'password') }
	      	 	placeholder='Password'
	      	/>
	        <Form.Input
            label='Confirm Password'
            type='password'
	      	 	value={this.props.signup.confirm_password}
	      	 	onChange={ handleItemChange.bind(null, setSignupItem, 'confirm_password') }
	      	 	placeholder='Confirm password'
	      	/>

          <Form.Input
            label='Phone Number'
            value={this.props.signup.phone_number}
            onChange={ handleItemChange.bind(null, setSignupItem, 'phone_number') }
            placeholder='(XXX) XXX-XXXX'
          />

          <Form.Input
            label='Organization'
            value={this.props.signup.organization}
            onChange={ handleItemChange.bind(null, setSignupItem, 'organization') }
            placeholder='Organization'
          />

          <NameBirthdateInput
            setItem={ setSignupItem }
            signup={ this.props.signup }
          />

          <Form.Dropdown fluid selection 
            label='Account Restriction'
            onChange={ this.handleDropdownChange.bind(this) }
            value={this.props.signup.account_restrictions}
            options={ genDropdownOptions('Employee', 'Manager', 'Owner') } 
          />

          <div className='topOneEm'>
            <Form.Button
              primary
              fluid
              disabled={ this.buttonStatus() }
              type='submit'
            >
              Submit
            </Form.Button>
          </div>
	      </Form>
      </div>
    );
  }
}
