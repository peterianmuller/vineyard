//React requirements
import React from 'react';
import { Link, browserHistory } from 'react-router';

//UI
import { Button, Form, Grid } from 'semantic-ui-react';
import Loadable from 'react-loading-overlay';

//Components
import DataFormInput from './DataFormInput';
//import Map from './Map';

//Actions and Functions
import { setLatLong } from '../helpers/changeHandlers';
//import { getWeather, postNote, setSelectedImage, uploadImgToImgur, setNoteFormItem } from '../actions/noteForm';

export default class DataForm extends React.Component {
  componentDidMount() {
    // set he userid for the note
    // this.props.dispatch(setNoteFormItem('username', this.props.auth.username))
    var formattedDate = String(new Date()).split(' ').slice(0,5).join(' ');
    console.log(formattedDate, "formatted date")

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => { setLatLong(coords.latitude, coords.longitude); } );
    this.props.dispatch(setNoteFormItem('date', formattedDate));
  }


  // need to:
    // create dataForm reducer 
    // create dataForm actions (much like form actions) 
    

  // clickFileChooser(e) {
  //   this.inputElement.click();
  // }

  // handleSubmit(event) {
  //   event.preventDefault();

  //   this.props.dispatch(uploadImgToImgur(this.props.note.selectedImg));
  // }

  // pullWeather(e) {
  //   e.preventDefault();
  //   this.props.dispatch(getWeather(this.props.note));
  // }

  // handleFileSelection(e) {
  //   e.persist();

  //   var inputFile = e.target.files[0];
  //   var reader = new FileReader();

  //   reader.onload = e => {
  //     this.props.dispatch(setSelectedImage(e.target.result));
  //   }

  //   reader.readAsDataURL(inputFile);
  // }

  render() {
    return (
      <div>
        <p>Standardization</p>
        <p>NaOH: 0.10</p>

      <Form>
        <DataFormInput title='vineyard' field='vineyard' />
        <DataFormInput title='block' field='block' />
        <DataFormInput title='varietal' field='varietal' />
        <DataFormInput title='clone' field='clone' />
        <DataFormInput title='pH' field='pH' />
        <DataFormInput title='Brix' field='Brix' />
        <DataFormInput title='NaOH' field='NaOH' />
      </Form>
      </div>
    );
  }
}
