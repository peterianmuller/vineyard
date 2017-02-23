import React from 'react';
import axios from 'axios';
import LatLon from './LatLon';
import { setLatLong } from '../helpers/changeHandlers';
import { Button, Grid } from 'semantic-ui-react'
import { getWeather, postNote } from '../actions/noteForm';
import NoteFormInput from './NoteFormInput';
//import { postNote } from '../actions/noteForm';


export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  pullWeather(e) {
    e.preventDefault();
    this.props.dispatch(getWeather(this.props.note));
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch(postNote(this.props.note));

    //before on button in render function: 
    //onClick={this.handleSubmit.bind(this)}
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
