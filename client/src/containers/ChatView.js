//React requirements
import React from 'react';

//UI
import { Divider } from 'semantic-ui-react';

//Components
import ChatInput from '../components/ChatInput';
import MessageWindow from '../components/MessageWindow';
import RoomSelector from '../components/RoomSelector';

//Actions and utilities
import { getRoomsRecentActivity } from '../actions/rooms';
import socket from '../sockets';

export default class ChatView extends React.Component {
  constructor(props) {
    super(props);

    const dispatch = this.props.dispatch;
    dispatch(getRoomsRecentActivity(props.auth.id));

    socket.on('message created', function() {
      dispatch(getRoomsRecentActivity(props.auth.id));
    });
  }

  render() {
    return (
      <div className='flex-box flex-row'>
        <div className='qtWidth'>
          <RoomSelector rooms={this.props.rooms} dispatch={this.props.dispatch} /> 
        </div>
        <div className='paddingLeftRight leftBorder threeQtWidth'>
          <MessageWindow user={this.props.auth} dispatch={this.props.dispatch} messages={this.props.messages} />
          <ChatInput 
            currentRoom={this.props.rooms.currentRoom}
            user={this.props.auth} 
            dispatch={this.props.dispatch}
            messages={this.props.messages} />
        </div>
      </div>
    );
  }
}
