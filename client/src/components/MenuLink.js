import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';
import store from '../store';
import { toggleLeftSidebar } from '../actions/navigation';

export default class MenuItem extends React.Component {
  handleClick(e) {
    if (this.props.onClick) 
      this.props.onClick();

    store.dispatch(toggleLeftSidebar()); 
  }

  render() {
    return (
      <Menu.Item 
        as={Link}
        name={this.props.name}
        to={ this.props.to ? this.props.to : this.props.name }
        onClick={this.handleClick.bind(this)}
      />
    );
  }
}
