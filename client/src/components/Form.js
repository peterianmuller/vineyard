import React from 'react';
import NoteFormInput from './NoteFormInput';
import { Button, Col, Form, Grid, Row } from 'react-bootstrap';
import Map from './Map';
import { setLatLong } from '../helpers/changeHandlers';
import { getWeather, postNote } from '../actions/noteForm';

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { setLatLong(coords.latitude, coords.longitude); } );
  }

  handleSubmit(event) {
    event.preventDefault();  

    this.props.dispatch(postNote(this.props.note));
  }

  pullWeather(e) {
    e.preventDefault();

    this.props.dispatch(getWeather(this.props.note));
  }
  
  render() {
    return (
      <Grid>
        <Row>
          <Col xsOffset={1} xs={10} smOffset={2} sm={8} mdOffset={3} md={6}>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <NoteFormInput title='Note Title' field='title' value={this.props.note.title} />

              <NoteFormInput title='Latitude' field='lat' value={this.props.note.lat} disabled={true}/>
              <NoteFormInput title='Longitude' field='lon' value={this.props.note.lon} disabled={true} />
              <Button onClick={this.pullWeather.bind(this)}>Get weather</Button>

              <NoteFormInput title='Note Text' field='textArea' value={this.props.note.textArea} isTextArea={true} />
              <Button>Next</Button>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}

