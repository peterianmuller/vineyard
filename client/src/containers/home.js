//React requirements
import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

//UI
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

//Components
import HomeCard from '../components/HomeCard';
import MainNavBar from '../components/MainNavBar';
import WeatherSummary from '../components/weatherSummary';

//Actions
import { setHomeLocation } from '../actions/homeView';

//Styles
import styles from '../styles/HomeStyles';

export default class Home extends React.Component {
  render() {
    console.log(JSON.parse(window.localStorage.getItem('vineyards')), 'local')
    return (
      <div style={styles.flexBox}>
        <div style={ { flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between', flex: '1 auto' } }>
          <HomeCard title='Notes' />
          <HomeCard title='Data' />
        </div>
      </div>
    );
  }
}

