import React from 'react';
import NoteFormInput from './NoteFormInput';
import { Form } from 'react-bootstrap';
import { setLatLong } from '../helpers/changeHandlers';
import { postNote } from '../actions/noteForm';

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
    ({ coords }) => { setLatLong(coords.latitude, coords.longitude) } );
  }

  handleSubmit(event) {
    event.preventDefault();  

    this.props.dispatch(postNote(this.props.note));
  }
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
          <NoteFormInput title='Note Title' field='title' value={this.props.note.title} />
          <NoteFormInput title='Username' field='username' value={this.props.note.username} />
          <NoteFormInput title='Vineyard' field='vineyard' value={this.props.note.vineyard} />
          <NoteFormInput title='Block' field='block' value={this.props.note.block} />
          <NoteFormInput title='Row' field='row' value={this.props.note.row} />
          <NoteFormInput title='Row Start' field='rowStart' value={this.props.note.rowStart} />
          <NoteFormInput title='Row End' field='rowEnd' value={this.props.note.rowEnd} />
          <NoteFormInput title='Latitude' field='lat' value={this.props.note.lat} disabled={true}/>
          <NoteFormInput title='Longitude' field='lon' value={this.props.note.lon} disabled={true} />
          <NoteFormInput title='Note Text' field='textArea' value={this.props.note.textArea} isTextArea={true} />
          <input type='submit' />
      </Form>
    );
  }
}

