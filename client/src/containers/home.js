//React requirements
import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import WeatherSummary from '../components/weatherSummary';
import { Segment } from 'semantic-ui-react';

import { setHomeLocation } from '../actions/homeView';

import axios from 'axios'

//Components
import HomeCard from '../components/HomeCard';
import MainNavBar from '../components/MainNavBar';

//Styles
import styles from '../styles/HomeStyles';

export default class Home extends React.Component {
  render() {
    console.log(JSON.parse(window.localStorage.getItem('vineyards')), 'local')
    return (
      <div style={styles.flexBox}>
        <HomeCard title='Notes' />
        <HomeCard title='Data' />
        <Segment style={styles.segmentSize}>
         <h1>Weather summary</h1>

         <WeatherSummary 
           dispatch={this.props.dispatch}
           temperature={this.props.homePage.temperature}
           humditiy={this.props.humidity}
           homePage={this.props.homePage}
         />
        </Segment>
      </div>
    );
  }
}

