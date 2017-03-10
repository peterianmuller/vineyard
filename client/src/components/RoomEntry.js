//React requirements
import React from 'react';

//Actions
import { setCurrentRoom } from '../actions/rooms';

//Styles
import styles from '../styles/ChatMessage';

export default class RoomEntry extends React.Component {

/**
 * @function handleClick
 * @param {e} event 
 * @memberOf RoomEntry
 * @description On user click dispatches action that sets current chat room.
 */
  handleClick(e) {
    e.preventDefault();

    var currentRoom = this.props.currentRoom;
    var newRoom = this.props.room.id;

    this.props.dispatch(setCurrentRoom(currentRoom, newRoom));
  }

  render() {
    var active = this.props.room.id === this.props.currentRoom;

    return (
      <a href="#" onClick={this.handleClick.bind(this)}>
        <div className={ (active ? 'activeRoom ' : ' ') + 'roomEntry'}>
          <p style={styles.roomFont}>{this.props.room.room_name}</p>
        </div>
      </a>
    );
  }
}
