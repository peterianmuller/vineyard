//React requirements
import React from 'react';
import { Link } from 'react-router';
import store from '../store';

//UI
import { Icon, Menu } from 'semantic-ui-react';

//Actions
import { push } from 'react-router-redux';
import { toggleLeftSidebar } from '../actions/navigation';

export default class MenuItem extends React.Component {

/**
 * Handles menu icon clicks.
 * @function handleClick
 * @param {e} event
 * @memberOf MenuItem
 * @description Dispatches an action that redirects user to desired endpoint.
 */
  handleClick(e) {
    if (this.props.onClick) 
      this.props.onClick();

    var toGo = this.props.to ? this.props.to : this.props.name;
    store.dispatch(push(toGo)); 
  }

  render() {
    return (
      <Menu.Item name={this.props.name} onClick={::this.handleClick}>
        <Icon size='large' name={this.props.icon} />
        {this.props.name}
      </Menu.Item>
    );
  }
}
