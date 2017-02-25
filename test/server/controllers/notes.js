// import mocha from 'mocha';
import chai from 'chai';
import axios from 'axios';

import Notes from '../../../server/db/models/notes';
import notesDBController from '../../../server/db/controllers/notes';
import { createNote, getAllNotes } from '../../../server/controllers/notes';

const expect = chai.expect;
// chai.should();

describe('notes server controller', () => {
  it('createNote should be a function', () => {
    expect(createNote).to.be.a('function');
  });
  it('getAllNotes should be a function', () => {
    expect(getAllNotes).to.be.a('function');
  });
  it('createNote should post a note to the db', () => {
    var params = {
      title: 'createNote should post a note to the db',
      text: 'createNote should post a note to the db',
      date_time: 'createNote should post a note to the db',
      latitude: 'createNote should post a note to the db',
      longitude: 'createNote should post a note to the db',
      image_url: 'createNote should post a note to the db'
      // note_author_id: 24,
    }
    axios.post('/api/note', params)
    .then((res) => {
      return Notes.where('title', 'createNote should post a note to the db').fetch().then((note) => {
        expect(note.attributes.title).to.equal('createNote should post a note to the db');
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  })
})
