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

    socket.emit('new message', {
      text: props.messages.textInput,
      room_id: 1,
      message_author_id: props.user.id
    });
  };

  var handleChange = function(e) {
    props.dispatch(textInputChange(e.nativeEvent.target.value));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input size='large' fluid icon>
        <input onChange={handleChange} />
        <Icon name='send' inverted circular link onClick={handleSubmit} />
      </Form.Input>
    </Form>
  );
};
