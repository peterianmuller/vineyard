//React requirements
import React from 'react';
import { Link, browserHistory } from 'react-router';

//UI
import { Button, Form, Grid } from 'semantic-ui-react';
import Loadable from 'react-loading-overlay';

//Components
import NoteFormInput from './NoteFormInput';
import Map from './Map';

//Actions and Functions
import { setLatLong } from '../helpers/changeHandlers';
import { getWeather, postNote, setSelectedImage, uploadImgToImgur, setNoteFormItem } from '../actions/noteForm';

export default class FormPage extends React.Component {
  componentDidMount() {
    var formattedDate = String(new Date()).split(' ').slice(0,5).join(' ');
    console.log(formattedDate, "formatted date")

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { setLatLong(coords.latitude, coords.longitude); } );
    this.props.dispatch(setNoteFormItem('date', formattedDate));
  }

  clickFileChooser(e) {
    this.inputElement.click();
  }

  handleSubmit(event) {
    event.preventDefault();

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
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <p>{this.props.note.date}</p>
            <p>{this.props.login.username}</p>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <NoteFormInput title='Note Title' field='title' value={this.props.note.title} />
              <NoteFormInput title='Note Text' field='textArea' value={this.props.note.textArea} isTextArea={true} />
            </Form>

            <Grid.Row>
              <Grid.Column>
                  <div className='photoContainer'>
                    <Loadable
                      spinner
                      active={ this.props.note.uploadPending }
                      animate
                      text="Uploading photo to imgur"
                    >
                      <img
                        src={this.props.note.selectedImg}

                        className='uploadedPhoto textCenter'
                        alt='Click here to upload image' 

                        onClick={this.clickFileChooser.bind(this)}
                      />
                    </Loadable>
                  </div>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <input
                ref={input => this.inputElement = input}
                className='selectFileBtn'
                style={ { display: 'none' } }
                type='file'
                capture='camera'
                onChange={this.handleFileSelection.bind(this)}
              />
              <div className='oneEm'>
                <Button
                  fluid
                  primary
                  onClick={this.handleSubmit.bind(this)}>
                  Next
                </Button>
              </div>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
