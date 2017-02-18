import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';
import { handleItemChange } from '../helpers/changeHandlers';
import { setLoginItem } from '../actions/login';

export default props => (
	<Grid>
	  <Row>
	    <Col xsOffset={2} xs={8} mdOffset={3} md={4}>
	      <form>
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
						/>
	        </FormGroup>
	      </form>
	    </Col>
	  </Row>
	</Grid>
)
