import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Grid, Row, Button } from 'react-bootstrap';
import Note from '../components/Note';
import axios from 'axios';
import { getNotes } from '../actions/notesView';

export default class NotesView extends React.Component {
  constructor(props) {
    super(props);

  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch(getNotes())
  }


  render() {
    return(
      <div>
        <Button onClick={ this.handleSubmit.bind(this) }> Give me Notes!</Button>
        {this.props.notesView.map((note, key) => (
         <Note title={note.title} text={note.text} location={note.location} key={key} />   
        ))}
      </div>
    )
  }
}
