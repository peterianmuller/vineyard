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
  <Segment>
    <Input
      fluid
      labelPosition='right'
      value={props.value}
      onChange={ changeHandler }
    />
  </Segment>
  </div>
)};