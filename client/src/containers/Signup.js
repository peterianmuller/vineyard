//React requirements
import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

//UI
import { Form, Segment } from 'semantic-ui-react';

//Components
import NameBirthdateInput from '../components/NameBirthdateInput';

//Actions and Functions
import { getOrgs, setSignupItem, signup } from '../actions/signup';
import { genDropdownOptions, genDropdownOptionsOgs } from '../helpers/lifeHax';
import { handleItemChange } from '../helpers/changeHandlers';

//Styles
import styles from '../styles/AuthStyles';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    
    this.props.dispatch(getOrgs());
  }

/**
 * Confirm password match on signup.
 * @function getPasswordValidationState
 * @param {} 
 * @description Checks user's password input; if not matching, error returned.
 * @memberOf Signup Container
 */
  getPasswordValidationState() {
    if (this.props.signup.password === '' &&
        this.props.signup.confirm_password === '') return null;
    else if (this.props.signup.password !== 
              this.props.signup.confirm_password) return 'error';
    else return 'success';
  }

/**
 * Enable/Disable submit button on signup form.
 * @function buttonStatus
 * @param {} 
 * @description Disables submit when all forms are not completed.
 * @memberOf Signup Container
 */
  buttonStatus() {
    return !(this.props.signup.password === this.props.signup.confirm_password &&
      Object.keys(this.props.signup).reduce((acc, key)  => {
        return this.props.signup[key] !== '' && acc;
      }, true));
  }

  handleDropdownChange(item, e, { value }) {
    this.props.dispatch(setSignupItem(item, value));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.dispatch(signup(this.props.signup));
  }

  render() {
    const { signup: fields } = this.props;
    const allOrgs = genDropdownOptions(
              fields.organization_list.map(item => item.name)
            );

    return (
      <Segment style={styles.segment}>
        <h2>Sign up here!</h2>

        <Form onSubmit={ ::this.handleSubmit }>
	        <Form.Input
            label="Username"
	      	 	value={fields.username}
	      	 	onChange={ handleItemChange.bind(null, setSignupItem, 'username') }
	      	 	placeholder='Username'
	      	/>
	        <Form.Input
            label='Password'
            type='password'
	      	 	value={fields.password}
	      	 	onChange={ handleItemChange.bind(null, setSignupItem, 'password') }
	      	 	placeholder='Password'
	      	/>
	        <Form.Input
            label='Confirm Password'
            type='password'
	      	 	value={fields.confirm_password}
	      	 	onChange={ handleItemChange.bind(null, setSignupItem, 'confirm_password') }
	      	 	placeholder='Confirm password'
	      	/>

          <Form.Input
            label='Phone Number'
            value={fields.phone_number}
            onChange={ handleItemChange.bind(null, setSignupItem, 'phone_number') }
            placeholder='(XXX) XXX-XXXX'
          />

          <Form.Dropdown fluid selection
            label='Organization'
            loading={ fields.orgs_loading }
            placeholder='Your Organization'
            value={fields.organization}
            onChange={ this.handleDropdownChange.bind(this, 'organization') }
            options={ genDropdownOptionsOgs(
              fields.organization_list.map(item => item.name.toUpperCase())
            ) }
          />

          <NameBirthdateInput
            setItem={ setSignupItem }
            signup={ fields }
          />

          <Form.Dropdown fluid selection 
            label='Account Restriction'
            onChange={ this.handleDropdownChange.bind(this, 'account_restrictions') }
            value={fields.account_restrictions}
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
      </Segment>
    );
  }
}
