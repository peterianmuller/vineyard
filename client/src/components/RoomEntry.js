//React requirements
import React from 'react';

//Actions
import { setCurrentRoom } from '../actions/rooms';

export default class RoomEntry extends React.Component {

/**
 * Set user's current room.
 * @function
 * @param {e} event - On user click dispatches action that sets current chat room.
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
          <h2>{this.props.room.room_name}</h2>
        </div>
      </a>
    );
  }
}
