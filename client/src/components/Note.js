import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Grid, Row } from 'react-bootstrap';

export default props => (
  <div>
    <FormGroup>
      <Row>
        <Col md={6}>
          <ControlLabel>{props.title}</ControlLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ControlLabel>{props.text}</ControlLabel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ControlLabel>{props.location}</ControlLabel>
        </Col>
      </Row>
    </FormGroup>
  </div>
)