
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

import { setHomeLocation, testOrgs } from '../actions/homeView';

//Styles
import styles from '../styles/HomeStyles';

class Home extends React.Component {
 
  componentDidMount(){
    var context = this;
    console.log(context);
    testOrgs(); 
    console.log('do I get here?');
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { 
        var lat = coords.latitude;
        var lng = coords.longitude; 
        this.props.dispatch(setHomeLocation({lat:lat, lng:lng}));
    })   
  }

  render() {
    return (

        <div style={ { flexDirection: 'column', justifyContent: 'space-between', alignContent: 'space-between', flex: '1 auto' } }>
          <HomeCard title='Notes' />
          <HomeCard title='Data' />
        </div>
    );
  }
}

