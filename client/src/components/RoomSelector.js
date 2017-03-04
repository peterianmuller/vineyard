//React requirements
import React from 'react';

//Ui
//import { } from 'semantic-ui-react';

//Components
import AddRoomModal from './AddRoomModal';
import AddUserModal from './AddUserModal';
import RoomEntry from './RoomEntry';
import UsersInRoomList from './UsersInRoomList';

export default props => (
  <div>
    <div className='flex-box' style={ { justifyContent: 'space-between' } }>
      <AddUserModal rooms={props.rooms} dispatch={props.dispatch} />
      <UsersInRoomList rooms={props.rooms} />
      <AddRoomModal rooms={props.rooms} dispatch={props.dispatch} auth={props.auth} /> 
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

