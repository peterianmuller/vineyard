
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

import { setHomeLocation, testOrgs, retrieveAllData } from '../actions/homeView';
import { getNotes } from '../actions/notesView';

//Styles
import styles from '../styles/HomeStyles';

export default class Home extends React.Component {
 
  componentDidMount() {
    var context = this;
    testOrgs(this.props.auth.username); 
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { 
        var lat = coords.latitude;
        var lng = coords.longitude; 
        context.props.dispatch(setHomeLocation({lat:lat, lng:lng}));
    })

    this.props.dispatch(getNotes());

    retrieveAllData();
  }

 // dummy data for data array
 // !this.props.dataArray[0].block ? [{row:'5', block:'10', titratable: '3.4', vineyard:'Rosella'}, {row:'2', titratable: '5.4', block:'17', vineyard:'Gatos Locos'}] :

 //this.props.dataArray.slice(0,9)

  render() {
    return (
      <div style={styles.flexBox}>
        <SplashCard />

        <div style={styles.stackedCardContainer}>
          <HomeCard title='Notes' stacked children={this.props.notesView.slice(0,9)}/>
          <HomeCard title='Data' stacked children={this.props.dataArray}/>
        </div>

      </div>
    );
  }
}

