//React requirements
import React from 'react';

//UI
import { Icon, List, Popup } from 'semantic-ui-react';

export default props => (
  <Popup position='bottom left' 
    on='click' trigger={<Icon size='huge' name='users' />}>
    <List divided>
      <List.Item>
        <List.Header>
          Users in room
        </List.Header> 
      </List.Item>
      {
        props.rooms.peopleInRoom.map((person, key) => (
          <List.Item key={key}>
            <List.Content>
              <List.Header> {person.username} </List.Header>
              <List.Description> {person.firstname + ' ' + person.lastname}</List.Description>
            </List.Content>
          </List.Item>
        ))
      }
    </List>
  </Popup>
)
