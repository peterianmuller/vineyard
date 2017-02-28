//React requirements
import React from 'react';

//UI
import { Button, Comment, Form, Grid, Header } from 'semantic-ui-react';

//Components
import ChatMessage from './ChatMessage';

export default props => {
  var rowStyle = {
    display: 'contents',
    breakAfter: 'always',
    justifyContent: 'flex-start',
    width: '100%'
  };
    
  return (
    <div style={ { display: 'flex', justifyContent: 'center' } }>
    	<Comment.Group style={rowStyle}>
    	  <ChatMessage author='Aaron' left={true}/>
    	  <ChatMessage author='Tim' left={false} />
    	</Comment.Group>
    </div>
  );
}


