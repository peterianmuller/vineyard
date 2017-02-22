import React from 'react';
import axios from 'axios';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { setLatLong } from '../helpers/changeHandlers';
import Map from './Map';
import Weather from './Weather';
import NoteFormInput from './NoteFormInput';

export default class validationView extends React.Component {
  constructor(props){
    super(props);
  }

  //use button below to post note

  render(){
    return (
      <div>
        <Map dispatch={this.props.dispatch} />
        <Weather dispatch={this.props.dispatch} note={this.props.note}/>
        <NoteFormInput title='Weather' field='weather' value={this.props.weather}/>
        <Button>Confirm and Save Note</Button>
      </div>
    )
  }
}