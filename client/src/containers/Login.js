import React from 'react';
import { Button, Col, ControlLabel, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';
import { handleItemChange } from '../helpers/changeHandlers';
import { setLoginItem, loginUser } from '../actions/login';

export default props => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.dispatch(loginUser(props.login));
	}
	return (
	<Grid>
	  <Row>
	    <Col xsOffset={2} xs={8} mdOffset={4} md={4}>
	      <form onSubmit={handleSubmit}>
	        <FormGroup >
	          <ControlLabel>Username</ControlLabel>
	          <FormControl
							value={props.login.username}
							onChange={ handleItemChange.bind(null, setLoginItem, 'username') }
							placeholder='Enter username here...'
						/>
	          <ControlLabel>Password</ControlLabel>
	          <FormControl
							value={props.login.password}
							onChange={ handleItemChange.bind(null, setLoginItem, 'password') }
							placeholder='Enter password here...'
              type='password'
						/>
	        </FormGroup>
					<Button
						bsStyle="primary"
						method="POST"
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
