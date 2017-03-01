//React requirements
import React from 'react';

//UI
import { Button, Grid } from 'semantic-ui-react'

//Components
import NoteFormInput from './NoteFormInput';

//Actions and Functions
import { setLatLong } from '../helpers/changeHandlers';
import { getWeather, setHomePageWeather } from '../actions/noteForm';

export default class WeatherSummary extends React.Component {

  componentDidMount() {
    this.props = this.props;
    let lat, lon;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { 
        lat = coords.latitude;
        lon = coords.longitude; 
        console.log('lat and lon are: ', lat, lon);
        console.log('this.props is: ', this.props);
        console.log('homePage?', this.props.homePage)
        this.props.dispatch(getWeather({lat:lat, lon:lon}, false));
       } );
  }
  
  // get summary of weather stuff
    // get other  

  render(){
    return (
      <div>
        <p>Temperature: {this.props.homePage.temperature}</p>
        <p>Humidity: {this.props.homePage.humidity}</p>
        <p>Today it's {this.props.homePage.description}</p>
        <p></p>
      </div>
    )
  }
}
