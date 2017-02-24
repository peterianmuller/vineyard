import React from 'react';
import { Col, ControlLabel, Form, FormControl, FormGroup, Row } from 'react-bootstrap'; 
import { handleItemChange } from '../helpers/changeHandlers';

export default props => (
  <FormGroup controlId='formControlsSelect'>
    <Row>
      <Col xs={6} md={6}>
        <ControlLabel>Account Restriction</ControlLabel>
      </Col>
      <Col xs={6}>
        <FormControl componentClass="select" onChange={ handleItemChange.bind(null, props.setItem, 'account_restrictions') } >
	        <option value='Owner'>Owner</option>
	        <option value='Manager'>Manager</option>
	        <option value='Employee'>Employee</option>
        </FormControl>
      </Col>
    </Row>

</FormGroup>
)