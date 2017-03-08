//React requirements
import React from 'react';

//UI
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react';

//Components
import MenuLink from './MenuLink';

//Actions
import { toggleLeftSidebar } from '../actions/navigation';

export default props => {
  var handleClick = e => {
    props.dispatch(toggleLeftSidebar()); 
  };

  return (
    <Menu icon>
      <Menu.Item  position='right'>
        Messages
        <Icon name='talk outline' />
      </Menu.Item>
    </Menu>
  );
};

