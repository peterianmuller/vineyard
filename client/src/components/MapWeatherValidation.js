import React from 'react';
import axios from 'axios';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { setLatLong } from '../helpers/changeHandlers';
import Map from './Map';

export default class validationView extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Map />
        <div> Weather Validation </div>
        <Button>Confirm and Save Note</Button>
      </div>
    )
  }
}