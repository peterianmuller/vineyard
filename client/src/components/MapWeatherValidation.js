import React from 'react';
import axios from 'axios';
import { Button, Nav, Navbar, NavItem } from 'react-bootstrap';
import { setLatLong } from '../helpers/changeHandlers';
import Map from './Map';
import Weather from './Weather';
import NoteFormInput from './NoteFormInput';
import { postNote } from '../actions/noteForm';

export default class validationView extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch(postNote(this.props.note));

    //before on button in render function: 
    //onClick={this.handleSubmit.bind(this)}
  }

  render(){
    return (
      <div>
        <Map dispatch={this.props.dispatch} />
        <Weather dispatch={this.props.dispatch} note={this.props.note}/>
        <Button onClick={this.handleSubmit.bind(this)}>Confirm and Save Note</Button>
      </div>
    )
  }
}
