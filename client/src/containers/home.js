
//React requirements
import React from 'react';

//UI
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

//Components
import HomeCard from '../components/HomeCard';
import MainNavBar from '../components/MainNavBar';
import SplashCard from '../components/SplashCard';
import WeatherSummary from '../components/weatherSummary';

//Actions

import { setHomeLocation, testOrgs } from '../actions/homeView';

//Styles
import styles from '../styles/HomeStyles';

export default class Home extends React.Component {
 
  componentDidMount(){
    var context = this;
    //testOrgs(); 
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { 
        var lat = coords.latitude;
        var lng = coords.longitude; 
        context.props.dispatch(setHomeLocation({lat:lat, lng:lng}));
    })   
  }

  render() {
    return (
      <div style={styles.flexBox}>
        <SplashCard />

        <div style={styles.stackedCardContainer}>
          <HomeCard title='Notes' stacked />
          <HomeCard title='Data' stacked />
        </div>

      </div>
    );
  }
}

