import React from 'react';
import { Link, browserHistory } from 'react-router';
import NoteFormInput from './NoteFormInput';
import { Button, Col, Form, Grid, Row } from 'react-bootstrap';
import Loadable from 'react-loading-overlay';
import Map from './Map';
import LatLon from './LatLon';
import { setLatLong } from '../helpers/changeHandlers';
import { getWeather, postNote, setSelectedImage, uploadImgToImgur } from '../actions/noteForm';

import axios from 'axios';

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { setLatLong(coords.latitude, coords.longitude); } );
  }

  handleSubmit(event) {
    event.preventDefault();  

    // this.props.dispatch(postNote(this.props.note));
    this.props.dispatch(uploadImgToImgur(this.props.note.selectedImg));
  }

  pullWeather(e) {
    e.preventDefault();
    this.props.dispatch(getWeather(this.props.note));
  }

  handleFileSelection(e) {
    e.persist();

    var inputFile = e.target.files[0];
    var reader = new FileReader();
    
    reader.onload = e => {
      this.props.dispatch(setSelectedImage(e.target.result));
    }

    reader.readAsDataURL(inputFile);
  }
  
  render() {
    return (
      <Grid>
        <Row>
          <Col xsOffset={1} xs={10} smOffset={2} sm={8} mdOffset={3} md={6}>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <NoteFormInput title='Note Title' field='title' value={this.props.note.title} />

              <NoteFormInput title='Note Text' field='textArea' value={this.props.note.textArea} isTextArea={true} />
            </Form>

            <Row>
              <Col>
                  <div className='photoContainer'>
                    <Loadable
                      spinner
                      active={ this.props.note.uploadPending }
                      animate
                      text="Uploading photo to imgur"
                    >
                      <img src={this.props.note.selectedImg} className='uploadedPhoto' alt='Select image to upload' />
                    </Loadable>
                  </div>
              </Col>
            </Row>

            <Row>
              <input className='selectFileBtn' type='file' capture='camera' onChange={this.handleFileSelection.bind(this)} />
              <Button bsClass='btn btn-primary btn-lg formBtnNext pull-right' onClick={this.handleSubmit.bind(this)}>Next</Button>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

