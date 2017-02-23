import React from 'react';
import { Form, Header, Icon, Input, Label, Segment, TextArea } from 'semantic-ui-react';
import { handleItemChange, startRecording } from '../helpers/changeHandlers';
import { setCurrentlyRecording, setNoteFormItem } from '../actions/noteForm';

export default props => (
  <div className='oneEm'>
    <Header size='tiny'>{props.title}</Header>
    { 
      props.isTextArea ? (
        <Segment>
          <TextArea
            value={props.value}
            onChange={ handleItemChange.bind(null, setNoteFormItem, props.field)}
          />
          <Label 
            attached='top right'
            className='fa fa-microphone'
            onClick={startRecording.bind(
              null, 
              setCurrentlyRecording, 
              props.field.toUpperCase()
            )}
          />
        </Segment>) : (
        <Segment>
          <Input
            fluid
            label={<Label className='fa fa-microphone'
                    onClick={startRecording.bind(
                      null, 
                      setCurrentlyRecording, 
                      props.field.toUpperCase()
                    )}
                  />}
            labelPosition='right'
            value={props.value}
            onChange={ handleItemChange.bind(null, setNoteFormItem, props.field)}
            disabled={ props.disabled ? true : false }
          />
        </Segment>)
    }
  </div>
);
