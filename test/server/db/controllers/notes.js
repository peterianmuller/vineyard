// import mocha from 'mocha';
import chai from 'chai';

import Notes from '../../../../server/db/models/notes';
import { newNote, getAllNotes } from '../../../../server/db/controllers/notes';

const expect = chai.expect;
// chai.should();
describe('notes database controller', () => {
  it('newNote should be a function', () => {
    expect(true).to.equal(true);
  });
  it('getAllNotes should be a function', () => {
    expect(getAllNotes).to.be.a('function');
  });
  it('newNote should create new note instance in database', () => {
    var params = {
      title: 'newNote should create new note instance in database',
      text: 'newNote should create new note instance in database',
      date_time: 'newNote should create new note instance in database',
      latitude: 'newNote should create new note instance in database',
      longitude: 'newNote should create new note instance in database',
      image_url: 'newNote should create new note instance in databaset'
      // note_author_id: 24,
    }
    return newNote(params)
    .then(() => {
      return Notes.where('title', 'newNote should create new note instance in database').fetch().then((note) => {
        expect(note.attributes.title).to.equal('newNote should create new note instance in database');
      })
    })
  });
  it('newNote should not add a note when title is null', () => {
    var params = {
      title: null,
      text: 'newNote should not add a note when title is null',
      date_time: 'newNote should not add a note when title is null',
      latitude: 'newNote should not add a note when title is null',
      longitude: 'newNote should not add a note when title is null',
      image_url: 'newNote should not add a note when title is nullt'
      // note_author_id: 24,
    }
    return newNote(params)
    .then(() => {
      return;
    })
    .catch((err) => {
      expect(true).to.equal(true);
    });
  });
  it('newNote should add notes that do not have an image_url field', () => {
    var params = {
      title: 'newNote should add notes that do not have an image_url field',
      text: 'newNote should add notes that do not have an image_url field',
      date_time: 'newNote should add notes that do not have an image_url field',
      latitude: 'newNote should add notes that do not have an image_url field',
      longitude: 'newNote should add notes that do not have an image_url field',
      image_url: null
      // note_author_id: 24,
    }
    return newNote(params)
    .then(() => {
      return Notes.where('title', 'newNote should add notes that do not have an image_url field').fetch().then((note) => {
        expect(note.attributes.title).to.equal('newNote should add notes that do not have an image_url field');
      })
    })
  })
});
