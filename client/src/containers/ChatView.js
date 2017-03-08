//React requirements
import React from 'react';

//UI
import { Segment } from 'semantic-ui-react';

//Containers
import Chatroom from './Chatroom';

//Components
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
        <Chatroom 
          messages={this.props.messages}
          dispatch={this.props.dispatch}
          user={this.props.auth}
          currentRoom={this.props.rooms.currentRoom}
        />
      </div>
    );
  }
}
