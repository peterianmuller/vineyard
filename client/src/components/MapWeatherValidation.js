//React requirements
import React from 'react';

//UI
import { Button, Segment } from 'semantic-ui-react'

//Components
import Map from './Map';
import Weather from './Weather';
import NoteFormInput from './NoteFormInput';

//Actions and functions
import { setLatLong } from '../helpers/changeHandlers';
import { postNote } from '../actions/noteForm';

export default props => (
  <Segment style={ { height: '90%', maxWidth: '700px', margin: '0 auto' } }>
    <Map dispatch={props.dispatch} homePage={props.homePage} />
    <Weather dispatch={props.dispatch} note={props.homePage}/>
  </Segment>
);
