//React requirements
import React from 'react';

//UI
import { Button, Icon, Menu, Sidebar } from 'semantic-ui-react';

//Components
import MenuLink from './MenuLink';

//Actions
import { push } from 'react-router-redux';
import { toggleLeftSidebar } from '../actions/navigation';

//Style
import styles from '../styles/AppStyles';

export default props => {
  var handleClick = e => {
    props.dispatch(push('/messages'));
    //props.dispatch(toggleLeftSidebar()); 
  };

  return (
    <Menu icon fixed='top' style={ styles.mainNavBar }>
    </Menu>
  );
};

