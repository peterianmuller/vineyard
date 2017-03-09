//React requirements
import React from 'react';
import { Link, browserHistory } from 'react-router';

//UI
import { Button, Form, Segment } from 'semantic-ui-react';
import Loadable from 'react-loading-overlay';

//Components
import NoteFormInput from './NoteFormInput';
import Map from './Map';

//Actions and Functions
import { setLatLong } from '../helpers/changeHandlers';
import { getWeather, postNote, setSelectedImage, uploadImgToImgur, setNoteFormItem } from '../actions/noteForm';

export default class FormPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(setNoteFormItem('username', this.props.auth.id))

    var formattedDate = String(new Date()).split(' ').slice(0,5).join(' ');

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { setLatLong(coords.latitude, coords.longitude); } );
    if (!this.props.note.date) {
      this.props.dispatch(setNoteFormItem('date', formattedDate));
    }
  }

  clickFileChooser(e) {
    this.inputElement.click();
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.dispatch(uploadImgToImgur(this.props.note.selectedImg));
  }

/**
 * @function pullWeather
 * @param {e} event
 * @memberOf FormPage
 * @description Dispatches action for weather API call.
 */
  pullWeather(e) {
    e.preventDefault();
    this.props.dispatch(getWeather(this.props.note));
  }

/**
 * @function handleFileSelection
 * @param {e} event
 * @memberOf FormPage
 * @desciption Allows user to select and upload file; sets image url to the Redux store via action dispatch.
 */
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
      <Segment style={ { maxWidth: '500px', margin: '0 auto', height: '90%' } }>
        <h1>Create a new note</h1>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <NoteFormInput title='Note Title' field='title' value={this.props.note.title} />
          <NoteFormInput title='Note Text' field='textArea' value={this.props.note.textArea} isTextArea={true} />
        </Form>

        <div className='photoContainer'
          onClick={this.clickFileChooser.bind(this)}
          style={ { height: '40%' } }
        >
          <Loadable
            spinner
            active={ this.props.note.uploadPending }
            animate
            text="Uploading photo to imgur"
          >
            <table style={ { height: '100%', width: '100%', margin: 0, padding: 0, border: 0 } }>
              <tr style={ { verticalAlign: 'middle', textAlign: 'center' } }>
                <td>
                  <img
                    src={this.props.note.selectedImg}
                    className='uploadedPhoto textCenter'
                    alt='Click here to upload image' 
                  />
                </td>
              </tr>
            </table>
          </Loadable>
        </div>

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
      </Segment>
    );
  }
}
