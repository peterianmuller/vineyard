import React from 'react';
import { Button, Col, ControlLabel, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';
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
  	  <Grid>
  	    <Row>
  	      <Col xsOffset={2} xs={8} mdOffset={4} md={4}>
  	        <form onSubmit={this.handleSubmit.bind(this)}>
  	          <FormGroup >
  	            <ControlLabel>Username</ControlLabel>
  	            <FormControl
  	  						value={this.props.login.username}
  	  						onChange={ handleItemChange.bind(null, setLoginItem, 'username') }
  	  						placeholder='Enter username here...'
  	  					/>
  	            <ControlLabel>Password</ControlLabel>
  	            <FormControl
  	  						value={this.props.login.password}
  	  						onChange={ handleItemChange.bind(null, setLoginItem, 'password') }
  	  						placeholder='Enter password here...'
                  type='password'
  	  					/>
  	          </FormGroup>
  	  				<Button
  	  					bsStyle="primary"
  	  					bsClass="btn pull-right btn-primary buttonWithMargin"
  	  					type='submit'
  	  				>
  	  					Submit
  	  				</Button>
  	        </form>
  	      </Col>
  	    </Row>
  	  </Grid>
    )
  }
}
