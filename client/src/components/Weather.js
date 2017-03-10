//React requirements
import React from 'react';

//UI
import { Button, Form, Segment } from 'semantic-ui-react'

//Components
import NoteFormInput from './NoteFormInput';

//Actions and Functions
import { setLatLong } from '../helpers/changeHandlers';
import { getWeather, postNote } from '../actions/noteForm';

//Styles
import styles from '../styles/WeatherStyles';

export default class Weather extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(postNote(this.props.note, this.props.home));
  }

  render(){
    return (
      <Form>
        <Form.Group style={ styles.form }>
          <Form.Input
            style={styles.input}
            label="Temperature:"
            value={ this.props.home.showF ? this.props.home.tempF : this.props.home.tempC } />
          <Form.Input 
            style={styles.input}
            label="Humidity:"
            value={this.props.home.humidity} />
          <Form.Input 
            style={styles.input}
            label="Latitude:"
            value={this.props.home.lat.toFixed(5)} />
          <Form.Input 
            style={styles.input}
            label="Longitude:"
            value={this.props.home.lon.toFixed(5)} />
        </Form.Group>

        <Button style={styles.button} 
          primary fluid onClick={this.handleSubmit.bind(this)}
        >
          Confirm and Save Note
        </Button>       
      </Form>
    );
  }
}
