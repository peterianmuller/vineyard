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
import { incrementTime, setFOrC } from '../actions/homeView';

//Style
import moment from 'moment';
import styles from '../styles/AppStyles';

export default class MainNavBar extends React.Component {
  componentDidMount() {
    if (!this.props.weather.incrementing) {
      setInterval(() => {
        this.props.dispatch(incrementTime()); 
      }, 1000);
    }

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
        <Dimmer inverted active={!this.props.weather.icon}>
          <Loader> </Loader>
        </Dimmer>

        {
          this.props.weather.icon ? (
            <Menu.Menu position='right' style={ styles.weatherElement }>
              <Menu.Item>
                { this.props.weather.time.format('dddd, MMMM Do YYYY, h:mm:ss A') }
              </Menu.Item>
              <Menu.Item
                onClick={::this.handleClick} 
              >
                <img src={this.props.weather.icon} />
                <p style={ { width: '3em' } }>
                  { 
                    (
                      this.props.weather.showF ? 
                      this.props.weather.tempF : 
                      this.props.weather.tempC
                    ) + 
                      String.fromCharCode(this.props.weather.showF ?  '0x2109' : '0x2103')
                  }
                </p>
              </Menu.Item>
              <Menu.Item>
                Humidity: {this.props.weather.humidity}
              </Menu.Item>
            </Menu.Menu>
          ) : ''
        }
      </Menu>
    );
  }
}

