//React requirements
import React from 'react';

//UI
import { Dimmer, Divider, Item, Loader, Segment } from 'semantic-ui-react';

//Components
import Note from '../components/Note';

//Actions
import { getNotes, addEvent, setLoading, sortNotesByDate } from '../actions/notesView';

export default class NotesView extends React.Component {
  componentDidMount() {
    this.props.dispatch(setLoading());
    this.props.dispatch(getNotes());
  }
  
  render() {
    return (
      <Segment style={ { height: '87%', margin: '0 auto' } }>
        <Dimmer active={!this.props.notesView.doneRetrieving}>
          <Loader>
            Loading notes 
          </Loader>
        </Dimmer>

        <h1>View notes</h1>
        <Divider style={ { margin: 0 } }/>

        <div style={ { height: '87%', overflowY: 'scroll' } }>
          <Item.Group>
            {
              this.props.notesView.notes.map((note, key) => (
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
        </div>
      </Segment>
    );
  }
}
