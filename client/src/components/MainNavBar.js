//React requirements
import React from 'react';

//UI
import { Button, Dimmer, Icon, Loader, Menu, Sidebar } from 'semantic-ui-react';

//Components
import MenuLink from './MenuLink';

//Actions
import { push } from 'react-router-redux';
import { toggleLeftSidebar } from '../actions/navigation';
import { getWeather } from '../actions/noteForm';
import { setFOrC } from '../actions/homeView';

//Style
import styles from '../styles/AppStyles';

export default class MainNavBar extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { 
        let lat = coords.latitude;
        let lon = coords.longitude; 
        this.props.dispatch(getWeather({ lat, lon }, false));
      } 
    );
  }

  handleClick(e) {
    this.props.dispatch(setFOrC());
  }

  render() {
    return (
      <Menu icon fixed='top' style={ styles.mainNavBar }>
        <Menu.Item position='right'
          onClick={::this.handleClick} 
          style={ styles.weatherElement }
        >
          <Dimmer inverted active={!this.props.weather.icon}>
            <Loader> </Loader>
          </Dimmer>

          <img src={this.props.weather.icon} />
          <p>
            { 
              (this.props.weather.showF ? 
                this.props.weather.tempF : 
                this.props.weather.tempC) +
                String.fromCharCode(this.props.weather.showF ? 
                  '0x2109' : '0x2103')
            }
          </p>
        </Menu.Item>
      </Menu>
    );
  }
}

