//React requirements
import React from 'react';
import { browserHistory } from 'react-router';

//UI
import { Button, Form, Grid, Input, Label } from 'semantic-ui-react';

//Actions and functions
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
      <div className='max500width multiColumnInput'>
  	  <Grid columns='equal' padding>
        <Grid.Row>
          <Grid.Column>
  	    <Form onSubmit={this.handleSubmit.bind(this)}>
  	      <Grid.Row>
  	        <Grid.Column>
  	          <Form.Input
                label='Username'
  	  	  			value={this.props.login.username}
  	  	  			onChange={ handleItemChange.bind(null, setLoginItem, 'username') }
  	  	  			placeholder='Enter username here...'
  	  	  		/>
              </Grid.Column> 
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
  	            <Form.Input
                  label='Password'
  	  	  				value={this.props.login.password}
  	  	  				onChange={ handleItemChange.bind(null, setLoginItem, 'password') }
  	  	  				placeholder='Enter password here...'
                  type='password'
  	  	  			/>
  	  	  			<Button type='submit' primary>Submit</Button>
  	        </Grid.Column>
  	      </Grid.Row>
  	    </Form>
      </Grid.Column>
    </Grid.Row>
  	  </Grid>
    </div>
    );
  }
}
