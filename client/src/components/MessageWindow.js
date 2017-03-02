//React requirements
import React from 'react';

//UI
import { Button, Comment, Grid, Header } from 'semantic-ui-react';

//Components
import ChatMessage from './ChatMessage';

//Actions and utilities
import { receivedMessage } from '../actions/messages';
import socket from '../sockets';

export default class MessageWindow extends React.Component {
  constructor(props) {
    super(props);

    socket.on('message created', function(data) {
      this.props.dispatch(receivedMessage(data)); 
    });
  }

  render() {
    var rowStyle = {
      display: 'contents',
      breakAfter: 'always',
      justifyContent: 'flex-start',
      width: '100%'
    };
      
    return (
      <div style={ { display: 'flex', justifyContent: 'center' } }>
      	<Comment.Group style={rowStyle}>
          {
            props.messages.messages.map((value, key) => {
              var radius = ['25px', '25px'];

              if (key > 0 && fakeMessages[key - 1].author === value.author) {
                radius[0] = '5px';
              } 
              
              if (key + 1 < fakeMessages.length && 
                  fakeMessages[key + 1].author === value.author) {
                radius[1] = '5px'; 
              }


              return (
                <ChatMessage 
                  key={key}
                  author={value.author}
                  text={value.text} 
                  left={!(value.author === 'Tim')} 
                  radius={radius}
                />);
            })
          }
      	</Comment.Group>
      </div>
    );
  }
}


