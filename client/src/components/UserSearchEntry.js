//React requirements
import React from 'react';

//UI
import { List } from 'semantic-ui-react';

//Actions
import { addPeopleToAdd, deletePeopleToAdd } from '../actions/rooms';

export default class UserSearchEntry extends React.Component {
  handleClick(e) {
    e.preventDefault();

    var user = this.props.user;
    var hasBeenAdded = this.props.toAdd[user.id]; 

    if (hasBeenAdded) 
      this.props.dispatch(deletePeopleToAdd(user));
    else
      this.props.dispatch(addPeopleToAdd(user));
  }

  render() {
    return (
      <List.Item className={(this.props.toAdd[this.props.user.id] ? 
          'selectedUser ' : '') + 'userEntry'}>
        <List.Content as='a' onClick={this.handleClick.bind(this)}>
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
