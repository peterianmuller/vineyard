import React from 'react';
import axios from 'axios';
import LatLon from './LatLon';
import { setLatLong } from '../helpers/changeHandlers';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { getWeather, postNote } from '../actions/noteForm';


export default class Weather extends React.Component {
  constructor(props){
    super(props);
  }

  pullWeather(e) {
    e.preventDefault();
    this.props.dispatch(getWeather(this.props.note));
  }

  render(){
    return (
      <div>
        <Button onClick={this.pullWeather.bind(this)}>Get weather</Button>
        <p>Weather info will go here</p>
      </div>
    )
  }
}