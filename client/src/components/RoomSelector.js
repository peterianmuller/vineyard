//React requirements
import React from 'react';

//Ui
import { Icon } from 'semantic-ui-react';

//Components
import RoomEntry from './RoomEntry';

export default props => {
  const handleClick = function(e) {
     
  };
   
  return (
    <div>
      <div className='flex-box' style={ { justifyContent: 'flex-end' } }>
        <Icon
          link
          name='edit'
          size='huge'
          onClick={handleClick}
        />
      </div>
      {
      	props.rooms.rooms.map((item, key) => (
          <RoomEntry 
            dispatch={props.dispatch}
            currentRoom={props.rooms.currentRoom}
            room={item}
            key={key}>
      	    {item.room_name} 
      	  </RoomEntry>
      	))
      }
    </div>
  );
}
