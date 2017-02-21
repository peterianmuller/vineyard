import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Grid, Row, Button } from 'react-bootstrap';
import Note from '../components/Note';
import axios from 'axios';

export default class NotesView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [{title:'note title 1', text: 'this is the text of the first text', location: 'this is the location'}, {title: 'note title 2', text: 'this is the text of the second note', location: '500 miles'}]
    }
    //this.getNotes = this.getNotes.bind(this);
  }

  // getNotes() {
  //   axios.get('/api/notes')
  //   .then((response)=> {
  //     console.log(response);
  //   });
  // }

  render() {
    return(
      <div>
      <Button onClick = { this.getNotes }>Give me Notes!</Button>
        { this.state.notes.map( (note, index) => 
          <Note title={note.title} text={note.text} location={note.location} key = {index}  />
        )}
      </div>
    )
  }
}