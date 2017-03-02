//React requirements
import React from 'react';

//UI
import { Button, Comment, Grid, Header } from 'semantic-ui-react';

//Components
import ChatMessage from './ChatMessage';

//Actions and utilities
import { grabMessagesInRoom, receivedMessage } from '../actions/messages';
import socket from '../sockets';

export default class MessageWindow extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(grabMessagesInRoom(1));

    console.log(this.props.messages);
    socket.on('message created', function(data) {
      console.log('i see this coming in');
      props.dispatch(receivedMessage(data)); 
    });

    socket.emit('initial room join', { room_id: 1 });
  }

  render() {
    var rowStyle = {
      display: 'contents',
      breakAfter: 'always',
      justifyContent: 'flex-start',
      width: '100%'
    };
      
    const messages = this.props.messages.messages;

    return (
      <div style={ { display: 'flex', justifyContent: 'center' } }>
      	<Comment.Group style={rowStyle}>
          {
            messages.map((value, key) => {
              var radius = ['25px', '25px'];

              if (key > 0 && messages[key - 1].author === value.author) {
                radius[0] = '5px';
              } 
              
              if (key + 1 < messages.length && 
                  messages[key + 1].author === value.author) {
                radius[1] = '5px'; 
              }


              return (
                <ChatMessage 
                  key={key}
                  author={value.author}
                  text={value.text} 
                  left={!(value.message_author_id === this.props.user.id)} 
                  radius={radius}
                />);
            })
          }
      	</Comment.Group>
      </div>
    );
  }
}


