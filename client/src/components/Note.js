//React requirements
import React from 'react';

//UI
import { Item } from 'semantic-ui-react';

export default props => (
  <Item style={ { paddingTop: '0.5em', paddingBottom: '0.5em', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' } }>
    <Item.Image spaced size='tiny' src={ props.image ? props.image : 'http://semantic-ui.com/images/wireframe/image.png'} />

    <Item.Content>
      <Item.Header style={ { paddingTop: '0.2em' } }>{props.title}</Item.Header>

      <Item.Description>
        <p>{props.text}</p>
      </Item.Description>
    </Item.Content>
  </Item>
);
