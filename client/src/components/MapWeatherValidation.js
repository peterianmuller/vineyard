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

  render(){
    return (
      <div>
        <Map />
        <NoteFormInput title='Weather' field='weather'/>
        <Button>Confirm and Save Note</Button>
      </div>
    )
  }
}