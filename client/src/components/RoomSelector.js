//React requirements
import React from 'react';

//Components
import RoomEntry from './RoomEntry';

export default props => (
  <div>
    {
    	props.rooms.rooms.map((item, key) => (
        <RoomEntry 
          active={item.room_id === props.rooms.currentRoom}
          room={item}
          key={key}>
    	    {item.room_name} 
    	  </RoomEntry>
    	))
    }
  </div>
);
