//React requirements
import React from 'react';

//UI
import { Button, Grid } from 'semantic-ui-react'

//Components
import Map from './Map';
import Weather from './Weather';
import NoteFormInput from './NoteFormInput';

//Actions and functions
import { setLatLong } from '../helpers/changeHandlers';
import { postNote } from '../actions/noteForm';

export default props => (
  <Grid centered='true' divided='vertically'>
    <Grid.Row columns={1}>
      <Grid.Column>
        <Map dispatch={props.dispatch} homePage={props.homePage} />
      </Grid.Column>
    </Grid.Row>  
    <Grid.Row columns={1}>
      <Grid.Column>
        <Weather dispatch={props.dispatch} note={props.note}/>
      </Grid.Column> 
    </Grid.Row>   
  </Grid>
);
