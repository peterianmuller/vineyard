//React requirements
import React from 'react';

//UI
import { List } from 'semantic-ui-react';

//Actions
import { addPeopleToAdd, deletePeopleToAdd } from '../actions/rooms';

export default class UserSearchEntry extends React.Component {
  constructor(props) {
    super(props);

    this.isInRoom = props.inRoom.reduce((acc, val) => acc || props.user.id === val.id, false);
  }

/**
 * Handles user seach for chat room member selection.
 * @function handleClick
 * @param {e} event
 * @memberOf UserSearchEntry
 * @description After user is selected to join a room, an action is dispatched to remove the user from the search results of users whom can be added.
 */
  handleClick(e) {
    e.preventDefault();

    var user = this.props.user;
    var hasBeenAdded = this.props.toAdd[user.id]; 

    hasBeenAdded ? 
      this.props.dispatch(deletePeopleToAdd(user)) :
      this.props.dispatch(addPeopleToAdd(user));
  }

  render() {
    return (
      <List.Item className={(this.props.toAdd[this.props.user.id] ? 
        'selectedUser ' : '') + 
        (this.isInRoom ? 'isInRoom' : 'userEntry')}>
        <List.Content as={this.isInRoom ? 'div' : 'a'}  
            onClick={this.isInRoom ? false : this.handleClick.bind(this)}>
          <List.Header as='h2'>
            {this.props.user.username}
          </List.Header>
          <List.Description>
            {this.props.user.firstname + ' ' + this.props.user.lastname}
          </List.Description>
        </List.Content>
      </List.Item> 
    );
  }
}
