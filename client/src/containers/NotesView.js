import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Grid, Row, Button } from 'react-bootstrap';
import Note from '../components/Note';
import axios from 'axios';
import { getNotes, addEvent } from '../actions/notesView';

export default class NotesView extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit(e){
    e.preventDefault();
    //this.props.dispatch(getNotes())
    this.props.dispatch(addEvent([{title:'title1', text:'this is the text of the note', lat: '122', lon: '22' }, {title:'the best note of all time', text:'there are moar grapes', lat: '89', lon: '100' }]));
  }

  
  render() {
    return(
      <div>
        <Button onClick={ this.handleSubmit.bind(this) }> Give me Notes!</Button>
        {this.props.notesView.map((note, key) => (
         <Note title={note.title} text={note.text} lat={note.lat} lon={note.lon} key={key} />   
        ))}
      </div>
    )
  }
}
