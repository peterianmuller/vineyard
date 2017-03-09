//React requirements
import React from 'react';

//UI
import { Button, Grid } from 'semantic-ui-react'

//Components
import NoteFormInput from './NoteFormInput';

//Actions and Functions
import { setLatLong } from '../helpers/changeHandlers';
import { getWeather, postNote } from '../actions/noteForm';

export default class Weather extends React.Component {
/**
 * Request weather from Weather Underground API.
 * @function pullWeather
 * @param {e} event 
 * @description Dispatches an action that requests weather info from Weather Underground API. Toggles boolean on store to true, indicating that there is a weather property for the note object sent to the database.
 * @memberOf Weather Component
 */
  pullWeather(e) {
    e.preventDefault();
    this.props.dispatch(getWeather(this.props.note, true));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(postNote(this.props.note));
  }

  render(){
    return (
      <Grid>
        <Grid.Row centered='true' columns={4}>
          <Grid.Column>
            <NoteFormInput title='Temperature: ' field='weather' value={this.props.note.temperature} />
          </Grid.Column>
          <Grid.Column>
            <NoteFormInput title='Humidity: ' field='weather' value={this.props.note.humidity} />
          </Grid.Column>
        </Grid.Row>     

        <Grid.Row centered="true" columns={2}>
          <Grid.Column>
            <Button onClick={this.pullWeather.bind(this)}>Get weather</Button>
            <Button onClick={this.handleSubmit.bind(this)}>Confirm and Save Note</Button>       
          </Grid.Column>
        </Grid.Row>    
      </Grid>
    )
  }
}
