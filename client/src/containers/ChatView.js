//React requirements
import React from 'react';

//UI
import { Divider } from 'semantic-ui-react';

//Components
import ChatInput from '../components/ChatInput';
import MessageWindow from '../components/MessageWindow';
import RoomSelector from '../components/RoomSelector';

//Actions
import { getRoomsRecentActivity } from '../actions/rooms';

export default class ChatView extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(getRoomsRecentActivity());
    console.log(this.props.rooms);
  }

  render() {
    return (
      <div className='flex-box flex-row'>
        <div className='qtWidth'>
          <RoomSelector rooms={this.props.rooms} dispatch={this.props.dispatch} /> 
        </div>
        <div className='paddingOneEm leftBorder halfWidth'>
          <MessageWindow user={this.props.auth} dispatch={this.props.dispatch} messages={this.props.messages} />
          <ChatInput user={this.props.auth} dispatch={this.props.dispatch} messages={this.props.messages} />
        </div>
      </div>
    );
  }
}
