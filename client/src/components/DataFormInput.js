//React requirements
import React from 'react';

//UI
import { Form, Header, Icon, Input, Label, Segment, TextArea } from 'semantic-ui-react';

//Actions and Functions
import { handleItemChange, startRecording } from '../helpers/changeHandlers';
import { setCurrentlyRecording } from '../actions/noteForm';
import { appendDataFormItem } from '../actions/dataForm';
      
export default props => (
  <div>
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
      onChange={ handleItemChange.bind(null, appendDataFormItem, props.field)}
    />
  </Segment>
  </div>
);