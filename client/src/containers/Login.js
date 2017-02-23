import React from 'react';
import { Button, Form, Grid, Input, Label } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import { handleItemChange } from '../helpers/changeHandlers';
import { setLoginItem, loginUser } from '../actions/login';

export default class Login extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.username) {
      browserHistory.push('/home');
    }
  }

	handleSubmit(e) {
		e.preventDefault();

		this.props.dispatch(loginUser(this.props.login));
	}

  render() {
  	return (
  	  <Grid columns='equal'>
  	    <Grid.Row>
  	      <Grid.Column>
  	        <Form onSubmit={this.handleSubmit.bind(this)}>
  	          <Form.Group>
  	            <Form.Input
                  label='Username'
  	  						value={this.props.login.username}
  	  						onChange={ handleItemChange.bind(null, setLoginItem, 'username') }
  	  						placeholder='Enter username here...'
  	  					/>
  	            <Form.Input
                  label='Password'
  	  						value={this.props.login.password}
  	  						onChange={ handleItemChange.bind(null, setLoginItem, 'password') }
  	  						placeholder='Enter password here...'
                  type='password'
  	  					/>
  	          </Form.Group>
  	  				<Button type='submit' primary>Submit</Button>
  	        </Form>
  	      </Grid.Column>
  	    </Grid.Row>
  	  </Grid>
    );
  }
}
