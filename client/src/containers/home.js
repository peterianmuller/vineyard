
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

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { 
        var lat = coords.latitude;
        var lng = coords.longitude; 
        context.props.dispatch(setHomeLocation({lat:lat, lng:lng}));
    })

    //What is this for?
    retrieveAllData();

    this.props.dispatch(testOrgs(this.props.auth.username)); 
    this.props.dispatch(getNotes());   
  }

 // var mockData = [
 //  {date: 'Yesterday', row:'5', method: 'ph', block:'5', result: '3.02', vineyard:'Burn Cottage Vineyard'}, 
 //  {date: 'Yesterday',row:'2', method: 'titratable acidity', result: '7.5', block:'2', vineyard:'Burn Cottage Vineyard'},
 //  {date: 'Yesterday',row:'2', method: 'brix', result: '21', block:'2', vineyard:'Burn Cottage Vineyard'},
 //  {date: 'March 9, 2017', row:'2', method: 'pH', result: '3.10', block:'5', vineyard:'Burn Cottage Vineyard'},
 //  {date: 'March 9, 2017', row:'5', method: 'titratable acidity', result: '8.4', block:'5', vineyard:'Burn Cottage Vineyard'},
 //  {date: 'March 9, 2017', row:'10', method: 'brix', result: '20.4', block:'2', vineyard:'Burn Cottage Vineyard'},
 //  {date: 'March 7, 2017', row:'11', method: 'brix', result: '23.0', block:'3', vineyard:'Burn Cottage Vineyard'},
 //  {date: 'March 7, 2017', row:'10', method: 'pH', result: '3.20', block:'3', vineyard:'Burn Cottage Vineyard'},
 //  {date: 'March 7, 2017', row:'12', method: 'titratable acidity', result: '6.5', block:'3', vineyard:'Burn Cottage Vineyard'}
 //  ];
 // dummy data for data array

  render() {
  const dataz = [
  {date: 'Yesterday', row:'5', method: 'ph', block:'5', result: '3.02', vineyard:'Burn Cottage Vineyard'}, 
  {date: 'Yesterday',row:'2', method: 'titratable acidity', result: '7.5', block:'2', vineyard:'Burn Cottage Vineyard'},
  {date: 'Yesterday',row:'2', method: 'brix', result: '21', block:'2', vineyard:'Burn Cottage Vineyard'},
  {date: 'March 9, 2017', row:'2', method: 'pH', result: '3.10', block:'5', vineyard:'Burn Cottage Vineyard'},
  {date: 'March 9, 2017', row:'5', method: 'titratable acidity', result: '8.4', block:'5', vineyard:'Burn Cottage Vineyard'},
  {date: 'March 9, 2017', row:'10', method: 'brix', result: '20.4', block:'2', vineyard:'Burn Cottage Vineyard'},
  {date: 'March 7, 2017', row:'11', method: 'brix', result: '23.0', block:'3', vineyard:'Burn Cottage Vineyard'},
  {date: 'March 7, 2017', row:'10', method: 'pH', result: '3.20', block:'3', vineyard:'Burn Cottage Vineyard'},
  {date: 'March 7, 2017', row:'12', method: 'titratable acidity', result: '6.5', block:'3', vineyard:'Burn Cottage Vineyard'}
  ];

    return (
      <div style={styles.flexBox}>
        <SplashCard />

        <div style={styles.stackedCardContainer}>
          <HomeCard title='Recent notes' stacked children={this.props.notesView.notes.slice(0,9)}/>
          <HomeCard title='Recent data points' stacked children={dataz}/>
        </div>

      </div>
    );
  }
}

