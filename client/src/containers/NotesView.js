//React requirements
import React from 'react';

//UI
import { Button, Divider, Grid, Item } from 'semantic-ui-react';

//Components
import Note from '../components/Note';

//Actions
import { getNotes, addEvent, sortNotesByDate } from '../actions/notesView';

export default class NotesView extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(getNotes());
  }
  
  render() {
    return (
      <div>
        <Button onClick={ this.handleSubmit.bind(this) }>Give me Notes!</Button>
        <Divider />

        <Grid padded>
          <Item.Group>
            {
              this.props.notesView.map((note, key) => (
                <Note 
                  image={note.image_url}
                  title={note.title} 
                  text={note.text} 
                  lat={note.lat} 
                  lon={note.lon} 
                  key={key} 
                />  
              ))
            }
          </Item.Group>
        </Grid>
      </div>
    );
  }
}
