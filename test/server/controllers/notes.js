// import mocha from 'mocha';
import chai from 'chai';
import axios from 'axios';

import Notes from '../../../server/db/models/notes';
import notesDBController from '../../../server/db/controllers/notes';
import { createNote, getAllNotes } from '../../../server/controllers/notes';

const expect = chai.expect;
// chai.should();

// =============NOTES SERVER MODEL TESTS================//
describe('notes server controller', () => {
  describe('server controller methods', () => {
    it('createNote should be a function', () => {
      expect(createNote).to.be.a('function');
    });
    it('getAllNotes should be a function', () => {
      expect(getAllNotes).to.be.a('function');
    });
  })
  describe('createNote should add all note fields', () => {
    it('createNote should add note title', () => {
      var params = {
        title: 'createNote should add note title',
        text: 'createNote should add note title',
        date_time: 'createNote should add note title',
        latitude: 'createNote should add note title',
        longitude: 'createNote should add note title',
        image_url: 'createNote should add note title'
        // note_author_id: 24,
      }
      axios.post('/api/note', params)
      .then((res) => {
              console.log('hghghghg')
        return Notes.where('title', 'createNote should add note title').fetch().then((note) => {
          expect(true).to.equal(false);
        })
        .then(() => {
          return Notes.where({
            title: 'createNote should add note title'
          }).destroy()
        })
      })
    })

  })
})
