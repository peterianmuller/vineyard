//React requirements
import React from 'react';

//UI
import { Button, Form, Segment } from 'semantic-ui-react'

//Components
import NoteFormInput from './NoteFormInput';

//Actions and Functions
import { setLatLong } from '../helpers/changeHandlers';
import { getWeather, postNote } from '../actions/noteForm';

export default class Weather extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(postNote(this.props.note));
  }

  render(){
    return (
      <Form>
        <Segment>
          <Form.Group style={ { margin: '0 auto' } }>
            <Form.Input
              label="Temperature :"
              value={ this.props.note.showF ? this.props.note.tempF : this.props.note.tempC } />
            
            <Form.Input 
              label="Humidity :"
              value={this.props.note.humidity} />
          </Form.Group>
        </Segment>

        <Button primary fluid onClick={this.handleSubmit.bind(this)}>
          Confirm and Save Note
        </Button>       
      </Form>
    );
  }
}
