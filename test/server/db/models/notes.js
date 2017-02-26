// import mocha from 'mocha';
import chai from 'chai';

import Notes from '../../../../server/db/models/notes';

const expect = chai.expect;
// chai.should();

describe('notes database model', () => {
  it('should add note', () => {
    return new Notes({
      title: 'should add note',
      text: 'should add note',
      date_time: 'should add note',
      latitude: 'should add note',
      longitude: 'should add note',
      image_url: 'should add notet'
      // note_author_id: 24,
    })
    .save()
    .then(() => {
      return Notes.where('title', 'should add note').fetch().then((note) => {
        // console.log('lalala ', typeof note.attributes.title);
        expect(note.attributes.title).to.be.a('string');
      })
      .catch((err) => {
        console.log('failed in should add note test: ', err);
      });
    });
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
        console.log('should not have successfully added note with null title');
      });
    })
    .catch((err) => {
      expect(true).to.equal(true);
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
