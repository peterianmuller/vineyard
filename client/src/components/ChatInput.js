//React requirements
import React from 'react';

//UI
import { Button, Form, Icon, Input } from 'semantic-ui-react';

export default props => {
  var textStyle = {
    width: '100%',
    maxHeight: '3em',
    overflowY: 'scroll',
    position: 'realtive'
  };

  var handleSubmit = function(e) {
    e.preventDefault();

    console.log('hi this is working');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input size='large' fluid icon>
        <input />
        <Icon name='send' inverted circular link onClick={handleSubmit} />
      </Form.Input>
    </Form>
  );
};
