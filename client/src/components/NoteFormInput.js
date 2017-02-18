import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import { handleItemChange, startRecording } from '../helpers/changeHandlers';
import { setCurrentlyRecording, setNoteFormItem } from '../actions/noteForm';

export default props => (
  <FormGroup
    controlId="formBasicText"
  >
    <ControlLabel>{props.title}</ControlLabel>
    <InputGroup>
      <FormControl
        name="title"
        type="text"
        value={props.value}
        placeholder="Enter text"
        onChange={ handleItemChange.bind(null, setNoteFormItem, props.field)}
        componentClass={ props.isTextArea ? 'textarea' : 'input'}
      />
      <FormControl.Feedback />
      <InputGroup.Button>
        <Button onClick={ 
          startRecording.bind(
            null, 
            setCurrentlyRecording, 
            props.field.toUpperCase()
          )}>
          Record
        </Button>
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>
);
