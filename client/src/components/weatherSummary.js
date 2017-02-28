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
      <Grid>
        <Grid.Row columns={4}>
          <Grid.Column>
            <p>Weather stuff</p>
            <p>{this.props.homePage.temperature}</p>
          </Grid.Column>
          <Grid.Column>
            <p>More weather stuff </p>
            <p>{this.props.homePage.humidity}</p>
          </Grid.Column>
        </Grid.Row>         
      </Grid>
    )
  }
}
