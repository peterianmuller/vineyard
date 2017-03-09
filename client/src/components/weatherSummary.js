//React requirements
import React from 'react';

//UI
import { Button, Grid } from 'semantic-ui-react'

//Components
import NoteFormInput from './NoteFormInput';

//Actions and Functions
import { setLatLong } from '../helpers/changeHandlers';
import { setHomePageWeather } from '../actions/noteForm';

export default class WeatherSummary extends React.Component {
  render(){
    return (
      <div>
        <img src={this.props.homePage.icon} />
        <h1>{this.props.homePage.temperature}</h1>
        Humidity: {this.props.homePage.humidity}
        Today it's {this.props.homePage.description}
      </div>
    )
  }
}
