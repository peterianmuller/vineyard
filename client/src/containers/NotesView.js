import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, Grid, Row, Button } from 'react-bootstrap';
import Note from '../components/Note';
import axios from 'axios';
import { getNotes } from '../actions/notesView';

export default class NotesView extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   notes: [{title:'note title 1', text: 'this is the text of the first text', location: 'this is the location'}, {title: 'note title 2', text: 'this is the text of the second note', location: '500 miles'}]
    // }
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch(getNotes())
    .then(res => {
      console.log('should be an array of objs', res.value);
      //componentDidMount()
    })
  }


  render() {
    return(
      <div>
        <Button onClick={ this.handleSubmit.bind(this) }> Give me Notes!</Button>
      </div>
    )
  }
}