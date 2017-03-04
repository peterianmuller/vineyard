//React requirements
import React from 'react';

//Ui
import { Icon } from 'semantic-ui-react';

//Components
import AddUserModal from './AddUserModal';
import RoomEntry from './RoomEntry';
import UserSearchEntry from './UserSearchEntry';


export default props => {
  const handleClick = function(e) {
     
  };

  return (
    <div>
      <div className='flex-box' style={ { justifyContent: 'space-between' } }>
        <AddUserModal rooms={props.rooms} dispatch={props.dispatch} />
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
            key={key}/>
      	))
      }
    </div>
  );
}
