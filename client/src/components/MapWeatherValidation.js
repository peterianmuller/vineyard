import React from 'react';
import axios from 'axios';
import { Button, Grid } from 'semantic-ui-react'
import { setLatLong } from '../helpers/changeHandlers';
import Map from './Map';
import Weather from './Weather';
import NoteFormInput from './NoteFormInput';
import { postNote } from '../actions/noteForm';

export default class validationView extends React.Component {
  constructor(props){
    super(props);

    //for old submit note button, now moved to weather component
    //this.handleSubmit = this.handleSubmit.bind(this);
  }


  //for old submit note button, now moved to weather component
  // handleSubmit(e){
  //   e.preventDefault();
  //   this.props.dispatch(postNote(this.props.note));

  //   //before on button in render function: 
  //   //onClick={this.handleSubmit.bind(this)}
  // }

        // Rendering of button

        // <Grid.Row columns={1}>
        //   <Grid.Column>
        //     <Button onClick={this.handleSubmit.bind(this)}>Confirm and Save Note</Button>
        //   </Grid.Column> 
        // </Grid.Row>   

  render(){
    return (
      <Grid centered='true' divided='vertically'>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Map dispatch={this.props.dispatch} />
          </Grid.Column>
        </Grid.Row>  
        <Grid.Row columns={1}>
          <Grid.Column>
            <Weather dispatch={this.props.dispatch} note={this.props.note}/>
          </Grid.Column> 
        </Grid.Row>   
      </Grid>
    )
  }
}
