//React requirements
import React from 'react';
import ReactDOM from 'react-dom';

//UI
import { Button, Comment, Grid, Header } from 'semantic-ui-react';

//Components
import ChatMessage from './ChatMessage';

//Actions and utilities
import { clearTextInput, grabMessagesInRoom, receivedMessage } from '../actions/messages';
import socket from '../sockets';

export default class MessageWindow extends React.Component {
  constructor(props) {
    super(props);

    socket.on('message created', function(data) {
      console.log('i see this coming in');
      props.dispatch(receivedMessage(data)); 
      props.dispatch(clearTextInput());
    });
  }

  componentWillUpdate() {
    var node = ReactDOM.findDOMNode(this);
    var heightDifference = node.scrollHeight - (Math.ceil(node.scrollTop) + node.offsetHeight);

    this.shouldScrollBottom = heightDifference <= 5;
  }
   
  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      var node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
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
      <div className='scrollable' style={ { display: 'flex', justifyContent: 'center' } }>
      	<Comment.Group style={rowStyle}>
          {
            messages.map((value, key) => {
              var radius = ['25px', '25px'];

              if (key > 0 && messages[key - 1].message_author_id === value.message_author_id) {
                radius[0] = '5px';
              } 
              
              if (key + 1 < messages.length && 
                  messages[key + 1].message_author_id === value.message_author_id) {
                radius[1] = '5px'; 
              }


              return (
                <ChatMessage 
                  key={key}
                  author={value.author_name}
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


