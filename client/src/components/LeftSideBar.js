//React requirements
import React from 'react';

//UI
import { Menu, Sidebar } from 'semantic-ui-react';

//Components
import MenuLink from './MenuLink';

//Actions
import { logoutUser } from '../actions/navigation';

export default props => {
  const handleLogout = (e) => {
    e.preventDefault();

    props.dispatch(logoutUser());
  };

  return (
    <Menu
      icon='labeled'
      vertical 
      fixed='left'
      inverted 
      width='thin'
      style={ { position: 'relative' } }
    >
        <Menu.Item header>Vineyard</Menu.Item>
        {
          props.auth.id ? 
            (
              <Menu.Menu>
                <MenuLink name='home' />
                <MenuLink name='viewData' to='/data/view' />
                <MenuLink name='viewAlerts' to='alerts' />
                <MenuLink name='writeNote' to='form' />
                <MenuLink name='viewNotes' to='/notesView' />
                <MenuLink name='recordData' to='/dataForm' />
                <MenuLink name='viewMap' to='/mapHome' />
              </Menu.Menu>
            ) : ''
        }
        <Menu.Menu position='right'>
          { 
            props.auth.id ? 
              (<Menu.Item name='logout' onClick={handleLogout} />) : 
              (<MenuLink name='login' />)
          }
          {
            props.auth.id ? '' : 
              (<MenuLink name='signUp' />)
          }
          { props.auth.id ? '': 
          (<MenuLink name='orgSignup' />)}
        </Menu.Menu>
      </Menu>
  );
}
