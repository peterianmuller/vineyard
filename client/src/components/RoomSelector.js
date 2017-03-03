//React requirements
import React from 'react';

//Ui
import { Icon, Input, Modal } from 'semantic-ui-react';

//Components
import RoomEntry from './RoomEntry';

//Actions
import { addUserToRoom, searchUsersForAddRoom } from '../actions/rooms';

export default props => {
  const handleClick = function(e) {
     
  };

  const addUserClick = function(e) {
    //props.dispatch(addUserToRoom(3, props.rooms.currentRoom));
  };

  const livePrefixSearch = function(e) {
    e.persist();

    props.dispatch(searchUsersForAddRoom(e.target.value));
    // send out get request to elastic
  };
   
  return (
    <div>
      <div className='flex-box' style={ { justifyContent: 'space-between' } }>
        <Modal trigger={<Icon link name='add user' size='huge' onClick={addUserClick} />}>
          <Modal.Header>This is where the stuff is gonna be</Modal.Header>
          <Modal.Content style={ { height: '800px' } }>
            <Input size='huge' icon='search' fluid onChange={livePrefixSearch}/>
          </Modal.Content>
        </Modal>
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
