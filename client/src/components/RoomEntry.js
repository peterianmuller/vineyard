//React requirements
import React from 'react';

export default class extends React.Component {
  handleClick(e) {
    //e.preventDefault();
    console.log(e.nativeEvent.target);
    var x = this.props.room.room_id; 
  }

  render() {
    return (
      <a href="#" onClick={this.handleClick.bind(this)}>
        <div className={ (this.props.active ? 'activeRoom ' : ' ') + 'roomEntry'}>
          <h2>{this.props.room.room_name}</h2>
        </div>
      </a>
    );
  }
}
