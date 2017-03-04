//React requirements
import React from 'react';

//UI
import { Form, Header, Icon, Input, Label, Segment, TextArea } from 'semantic-ui-react';

//Actions and Functions
import { handleItemChange } from '../helpers/changeHandlers';
import { addDataToArray } from '../actions/dataArray';
      
export default props => {
  var changeHandler = (e) => {
    e.persist();
    props.dispatch(addDataToArray(props.akey, props.field, e.target.value));
  }

  return(<div>
  {  
  (props.field === 'pH' || props.field === 'Brix' || props.field === 'NaOH') ? (  
  <Segment>
    <Input
      fluid
      type="number"
      step="0.01"
      labelPosition='right'
      value={props.value}
      onChange={ changeHandler }
    />
  </Segment>
  ) : (  
  <Segment>
    <Input
      fluid
      labelPosition='right'
      value={props.value}
      onChange={ changeHandler }
    />
  </Segment>
  )
  }
  </div>
)};