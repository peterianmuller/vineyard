import React from 'react';
import { Col, ControlLabel, Form, FormControl, FormGroup, InputGroup, Row } from 'react-bootstrap';
import NoteFormInput from './NoteFormInput';
import { handleItemChange } from '../helpers/changeHandlers';
import { setNoteFormItem } from '../actions/noteForm';

export default props => (
  <Form inline>
    <Row>
      <Col xs={6}>
        <NoteFormInput field='lat' value={props.lat} disabled={true} />
      </Col>
      <Col xs={6}>
        <NoteFormInput field='lon' value={props.lon} disabled={true} />
      </Col>
    </Row>
  </Form>
);
