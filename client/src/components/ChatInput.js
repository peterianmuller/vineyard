//React requirements
import React from 'react';

//UI
import { Button, Form, Icon, Input } from 'semantic-ui-react';

//Actions and utilities
import { textInputChange } from '../actions/messages';
import socket from '../sockets';

export default props => {
  var textStyle = {
    width: '100%',
    maxHeight: '3em',
    overflowY: 'scroll',
    position: 'realtive'
  };

  var handleSubmit = function(e) {
    e.preventDefault();

    if (props.messages.textInput.length > 0) {
      socket.emit('new message', {
        text: props.messages.textInput,
        room_id: props.currentRoom,
        message_author_id: props.user.id,
        author_name: props.user.username
      });
    }
  };

  var handleChange = function(e) {
    props.dispatch(textInputChange(e.nativeEvent.target.value));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input size='large' fluid icon>
        <input value={props.messages.textInput} onChange={handleChange} />
        <Icon name='send' inverted circular link onClick={handleSubmit} />
      </Form.Input>
    </Form>
  );
};
