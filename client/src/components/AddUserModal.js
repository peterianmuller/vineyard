//React requirements
import React from 'react'; 

//UI
import { Icon, Input, List, Modal } from 'semantic-ui-react';

//Components
import UserSearchEntry from './UserSearchEntry';

//Actions
import { addUserToRoom, closeModal, getUsersInRoom, searchUsersForAddRoom, toggleModal, userAddRoomFinish } from '../actions/rooms';

export default class AddUserModal extends React.Component {
  constructor(props) {
    super(props);

    this.toIterate = [];
  }

  componentWillReceiveProps(nextProps) {
    this.props.dispatch(getUsersInRoom(this.props.rooms.currentRoom));
    this.toIterate = Object.values(nextProps.rooms.peopleToAdd)
      .concat(nextProps.rooms.userList.map(item => item._source));
  }

  addUserClick(e) {
    this.props.dispatch(toggleModal(true));
  }

  handleClose(e) {
    this.props.dispatch(closeModal(true));
  }

  handleSubmit(e) {
    if (e.charCode === 13) {
      var keys = Object.keys(this.props.rooms.peopleToAdd);

      if (keys.length > 0) {
        this.props.dispatch(addUserToRoom(keys, this.props.rooms.currentRoom))
          .then(() => { 
            this.props.dispatch(closeModal(true));
          });
      }
    }
  }

  livePrefixSearch(e) {
    e.persist();

    this.props.dispatch(searchUsersForAddRoom(e.target.value));
  }
   
  render() {
    return (
      <Modal open={this.props.rooms.addUserModalOpen}
        trigger={<Icon link name='add user' size='huge' onClick={this.addUserClick.bind(this)} />}
        onClose={this.handleClose.bind(this)}
      >
        <Modal.Header>Add users to room</Modal.Header>
        <Modal.Content style={ { height: '800px' } }>
          <Input 
            size='huge' 
            onKeyPress={this.handleSubmit.bind(this)}
            icon='search'
            fluid onChange={this.livePrefixSearch.bind(this)}
          />
          <List divided>
            {
              this.toIterate.map((person, key) => (
                <UserSearchEntry 
                  dispatch={this.props.dispatch}
                  toAdd={this.props.rooms.peopleToAdd}
                  user={person} 
                  key={person.id} 
                />
              ), this)
            }
          </List>
        </Modal.Content>
      </Modal>
    );
  }
}
