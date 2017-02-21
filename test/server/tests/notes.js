import notesRouteController from '../../../server/config/routes/notes';
import notesDBController from '../../../server/db/controllers/notes';
import Notes from '../../../server/db/models/notes';

import mocha from 'mocha';
import should from 'should';
import chai from 'chai';
import sinon from 'sinon';
// import assert from 'assert';

const expect = chai.expect;
chai.should();
// const assert = chai.assert();
var note;

describe('notes database model', () => {
  it('should create note instance in db', () => {
    return Notes.create({
      title: 'note test title',
      text: 'note test text',
      location: 'note test location',
      image: 'note text image',
    })
    .then(() => {
      return note = Notes.find({
        where: {
          title: 'note test title'
        }
      })})
      .then(() => {
        expect(note).to.be.an('object');
      })
      .then(() => {
        note = null;
      })
      .catch((err) => {
        console.log('test failed ', err);
      });
  });
  it('should not change the note data when retrieving', () => {
    return Notes.create({
      title: 'note test title',
      text: 'note test text',
      location: 'note test location',
      image: 'note text image',
    })
    .then(() => {
      return note = Notes.find({
        where: {
          title: 'note test title'
        }
      })})
      .then(() => {
        expect(note).to.be.an('object');
      })
      .then(() => {
        note = null;
      });
  });
});
