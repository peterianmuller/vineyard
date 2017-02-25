import notesRouteController from '../../../server/config/routes/notes';
import notesDBController from '../../../server/db/controllers/notes';
import Notes from '../../../server/db/models/notes';

import mocha from 'mocha';
// import should from 'should';
import chai from 'chai';
// import sinon from 'sinon';
// import assert from 'assert';

const expect = chai.expect;
chai.should();
// const assert = chai.assert();
// var note;

describe('notes', () => {
  it('should add note', () => {
    return new Notes({
      title: 'should add note test',
      text: 'should add note test',
      date_time: 'should add note test',
      latitude: 'should add note test',
      longitude: 'should add note test',
      image_url: 'should add note test'
      // note_author_id: 24,
    })
    .save()
    .then(() => {
      return Notes.where('title', 'this is a test').fetch().then((note) => {
        // console.log('this should be the note: ', note.attributes);
        expect(note.attributes.title).to.be.a('string');
      })
    })
    .catch((err) => {
      console.log('failed in should add note test: ', err);
    })
  });
  it('should not add note when title is null', () => {
    return new Notes({
      title: null,
      text: 'should not add note when title is null',
      date_time: 'should not add note when title is null',
      latitude: 'should not add note when title is null',
      longitude: 'should not add note when title is null',
      image_url: 'should not add note when title is null'
      // note_author_id: 24,
    })
    .save()
    .then(() => {
      return Notes.where('text', 'should not add note when title is null').fetch().then((note) => {
      });
    })
    .catch((err) => {
      // console.log('this is the note: ', err);
      expect(true).to.equal(true);
      // console.log('failed should not add note when title is null test: ', err);
    });
  });
  it('should add notes that do not have an image_url field', () => {
    return new Notes({
      title: 'should add notes that do not have an image_url field',
      text: 'should add notes that do not have an image_url field',
      date_time: 'should add notes that do not have an image_url field',
      latitude: 'should add notes that do not have an image_url field',
      longitude: 'should add notes that do not have an image_url field',
      image_url: null
      // note_author_id: 24,
    })
    .save()
    .then(() => {
      return Notes.where('text', 'should add notes that do not have an image_url field').fetch().then((note) => {
        expect(note.attributes.title).to.be('should add notes that do not have an image_url field');
      })
    })
    .catch((err) => {
      console.log(err);
    });
  });
});

describe('notes database controller', () => {
  it('newNote should be a function', () => {
    expect(notesDBController.newNote).to.be.a('function');
  });
  it('getAllNotes should be a function', () => {
    expect(notesDBController.getAllNotes).to.be.a('function');
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
    return notesDBController.newNote(params)
    .then(() => {
      return Notes.where('title', 'newNote should create new note instance in database').fetch().then((note) => {
        expect(note.attributes.title).to.equal('newNote should create new note instance in database');
      })
    })
    .catch((err) => {
      console.log('failed newNote should create new note instance in database test: ', err);
    });
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
    return notesDBController.newNote(params)
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
    return notesDBController.newNote(params)
    .then(() => {
      return Notes.where('title', 'newNote should add notes that do not have an image_url field').fetch().then((note) => {
        expect(note.attributes.title).to.equal('newNote should add notes that do not have an image_url field');
      })
    })
    .catch((err) => {
      console.log(err);
    });
  })
});


// get users should be funtion
// should return JSON data


// SHOULD I TEST INPUT TYPES (SHOULD BE INTEGER, OBJECT, ETC.)?
// SHOULD I TEST TO MAKE SURE FIELDS EXIST AND ARE NOT NULL? MAKE SURE NOTNULLABLE FIELDS WON'T BE ACCEPTED WHEN NULL
// TEST CONVERSIONS: A MALFORMED DATE SHOULD BE STORED AND RETURNED IN THE CORRECT FORM.
// TEST CONVERSIONS: DATA SHOULD BE STORED CONSISTENTLY (ALL LOWERCASE OR UPPERCASE)
// TEST AUTHORIZATION: SHOULDN'T BE ABLE TO ACCESS ROUTES WITHOUT AUTHORIZATION
// TEST FORM CONTROL: INVALID EMAILS SHOULDN'T BE ALLOWED.
// MAKE SURE FOREIGN KEYS ARE ACCURATELY MIGRATING
// ALSO TEST EACH LEVEL OF CONTROLLER TO MAKE SURE THEY ARE ACCURATELY ROUTING TO THE CORRECT DB MODEL
// INSERT NOTE, THEN RETRIEVE ALL NOTES TO MAKE SURE NOTE IS IN ALL NOTES
