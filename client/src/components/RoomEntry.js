//React requirements
import React from 'react';

//Actions
import { setCurrentRoom } from '../actions/rooms';

export default class RoomEntry extends React.Component {
  handleClick(e) {
    e.preventDefault();

    var currentRoom = this.props.currentRoom;
    var newRoom = this.props.room.id;
    console.log(this.props.room);

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
