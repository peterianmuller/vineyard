//React requirements
import React from 'react';

//UI
import { Segment } from 'semantic-ui-react';

//Components
import ChatInput from '../components/ChatInput';
import MessageWindow from '../components/MessageWindow';
import RoomSelector from '../components/RoomSelector';

//Actions and utilities
import { getRoomsRecentActivity, getUsersInRoom } from '../actions/rooms';
import socket from '../sockets';


//Styles
import styles from '../styles/ChatMessage';

export default class ChatView extends React.Component {
  constructor(props) {
    super(props);

    const dispatch = this.props.dispatch;
    dispatch(getRoomsRecentActivity(props.auth.id));

    socket.on('message created', function() {
      dispatch(getRoomsRecentActivity(props.auth.id));
    });

    socket.on('added to room', function() {
      console.log('ive been added');
      dispatch(getRoomsRecentActivity(props.auth.id));
    });
  }

  render() {
    return (
      <div className='flex-box flex-row' style={styles.chatView}>
        <div className='qtWidth'>
          <RoomSelector rooms={this.props.rooms} dispatch={this.props.dispatch} auth={this.props.auth} /> 
        </div>
        <Segment style={styles.chatBox}>
          <MessageWindow user={this.props.auth} dispatch={this.props.dispatch} messages={this.props.messages} />
          <ChatInput 
            currentRoom={this.props.rooms.currentRoom}
            user={this.props.auth} 
            dispatch={this.props.dispatch}
            messages={this.props.messages} />
        </Segment>
      </div>
    );
  }
}
