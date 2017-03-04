//React requirements
import React from 'react';

//Ui
import { Icon, Input, List, Modal } from 'semantic-ui-react';

//Components
import RoomEntry from './RoomEntry';
import UserSearchEntry from './UserSearchEntry';

//Actions
import { addUserToRoom, searchUsersForAddRoom, toggleModal, userAddRoomFinish } from '../actions/rooms';

export default props => {
  const handleClick = function(e) {
     
  };

  const addUserClick = function(e) {
    //props.dispatch(addUserToRoom(3, props.rooms.currentRoom));
    props.dispatch(toggleModal());
    
  };

  const handleSubmit = function(e) {
    if (e.charCode === 13) {
      var keys = Object.keys(props.rooms.peopleToAdd);

      if (keys.length > 0) {
        props.dispatch(addUserToRoom(keys, props.rooms.currentRoom))
          .then(() => { 
            props.dispatch(userAddRoomFinish()) 
          });
      }
    }
  };

  const livePrefixSearch = function(e) {
    e.persist();

    props.dispatch(searchUsersForAddRoom(e.target.value));
  };
   
  const toIterate = Object.values(props.rooms.peopleToAdd)
    .concat(props.rooms.userList.map(item => item._source));

  return (
    <div>
      <div className='flex-box' style={ { justifyContent: 'space-between' } }>
        <Modal open={props.rooms.modalOpen}
          trigger={<Icon link name='add user' size='huge' onClick={addUserClick} />}>
          <Modal.Header>This is where the stuff is gonna be</Modal.Header>
          <Modal.Content style={ { height: '800px' } }>
            <Input size='huge' onKeyPress={handleSubmit} icon='search' fluid onChange={livePrefixSearch}/>
            <List divided>
              {
                toIterate.map((person, key) => (
                  <UserSearchEntry 
                    dispatch={props.dispatch}
                    toAdd={props.rooms.peopleToAdd}
                    user={person} 
                    key={person.id} 
                  />
                ))
              }
            </List>
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
