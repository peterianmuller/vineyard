//React requirements
import React from 'react';
import { browserHistory } from 'react-router';

//UI
import { Button, Form, Grid, Input, Segment } from 'semantic-ui-react';

//Actions and functions
import { handleItemChange } from '../helpers/changeHandlers';
import { setLoginItem, loginUser } from '../actions/login';

//Styles
import styles from '../styles/AuthStyles';

export default class Login extends React.Component {
	handleSubmit(e) {
		e.preventDefault();

		this.props.dispatch(loginUser(this.props.login));
	}

  render() {
  	return (
      <Segment style={styles.segment}>
        <h1> Log in here!  </h1>
  	    <Grid columns='equal' padded>
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
  	    	      			<Button floated='right' type='submit' primary>Submit</Button>
  	              </Grid.Column>
  	            </Grid.Row>
  	          </Form>
            </Grid.Column>
          </Grid.Row>
  	    </Grid>
      </Segment>
    );
  }
}
