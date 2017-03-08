//React requirements
import React from 'react';

//UI
import { Divider, Segment } from 'semantic-ui-react';

//Components
import AddRoomModal from './AddRoomModal';
import AddUserModal from './AddUserModal';
import RoomEntry from './RoomEntry';
import UsersInRoomList from './UsersInRoomList';

//styles
import Radium from 'radium';
import styles from '../styles/ChatMessage';

@Radium
export default class RoomSelector extends React.Component { 
  
  render() {
    var modalSize = 'big';
    return (
      <Segment style={styles.roomSelectorSegment}>
        <div style={styles.roomSelector}>
          <AddUserModal modalSize={modalSize} rooms={this.props.rooms} dispatch={this.props.dispatch} />
          <UsersInRoomList modalSize={modalSize} rooms={this.props.rooms} />
          <AddRoomModal modalSize={modalSize} rooms={this.props.rooms} dispatch={this.props.dispatch} auth={this.props.auth} /> 
        </div>

        <Divider />
        <div style={styles.roomEntries}>
          {
          	this.props.rooms.rooms.map((item, key) => (
              <RoomEntry 
                dispatch={this.props.dispatch}
                currentRoom={this.props.rooms.currentRoom}
                room={item}
                key={key}/>
          	))
          }
        </div>
      </Segment>
    );
  }
}
