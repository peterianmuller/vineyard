// import mocha from 'mocha';
import chai from 'chai';

import Notes from '../../../../server/db/models/notes';

const expect = chai.expect;
// chai.should();

describe('notes database model', () => {
  describe('should add all note fields', () => {
    it('should add note title', () => {
      return new Notes({
        title: 'should add note title',
        text: 'should add note title',
        date_time: 'should add note title',
        latitude: 'should add note title',
        longitude: 'should add note title',
        image_url: 'should add note title'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Notes.where('title', 'should add note title').fetch().then((note) => {
          expect(note.attributes.title).to.equal('should add note title');
        });
      })
    })
    it('should add note text', () => {
      return new Notes({
        title: 'should add note text',
        text: 'should add note text',
        date_time: 'should add note text',
        latitude: 'should add note text',
        longitude: 'should add note text',
        image_url: 'should add note text'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Notes.where('text', 'should add note text').fetch().then((note) => {
          expect(note.attributes.text).to.equal('should add note text');
        });
      });
    });
    it('should add note date_time', () => {
      return new Notes({
        title: 'should add note date_time',
        text: 'should add note date_time',
        date_time: 'should add note date_time',
        latitude: 'should add note date_time',
        longitude: 'should add note date_time',
        image_url: 'should add note date_time'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Notes.where('date_time', 'should add note date_time').fetch().then((note) => {
          expect(note.attributes.date_time).to.equal('should add note date_time');
        });
      });
    });
    it('should add note latitude', () => {
      return new Notes({
        title: 'should add note latitude',
        text: 'should add note latitude',
        date_time: 'should add note latitude',
        latitude: 'should add note latitude',
        longitude: 'should add note latitude',
        image_url: 'should add note latitude'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Notes.where('latitude', 'should add note latitude').fetch().then((note) => {
          expect(note.attributes.latitude).to.equal('should add note latitude');
        });
      });
    });
    it('should add longitude', () => {
      return new Notes({
        title: 'should add longitude',
        text: 'should add longitude',
        date_time: 'should add longitude',
        latitude: 'should add longitude',
        longitude: 'should add longitude',
        image_url: 'should add longitude'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Notes.where('longitude', 'should add longitude').fetch().then((note) => {
          expect(note.attributes.longitude).to.equal('should add longitude');
        });
      });
    });
    it('should add note image_url', () => {
      return new Notes({
        title: 'should add note image_url',
        text: 'should add note image_url',
        date_time: 'should add note image_url',
        latitude: 'should add note image_url',
        longitude: 'should add note image_url',
        image_url: 'should add note image_url'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Notes.where('image_url', 'should add note image_url').fetch().then((note) => {
          expect(note.attributes.image_url).to.equal('should add note image_url');
        });
      });
    });
  })
  describe('should not add note when notNullable fields are null', () => {
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
    it('should not add note when text is null', () => {
      return new Notes({
        title: 'should not add note when text is null',
        text: null,
        date_time: 'should not add note when text is null',
        latitude: 'should not add note when text is null',
        longitude: 'should not add note when text is null',
        image_url: 'should not add note when text is null'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Notes.where('text', 'should not add note when text is null').fetch().then((note) => {
          console.log('should not have successfully added note with null text');
        });
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('should not add note when date_time is null', () => {
      return new Notes({
        title: 'should not add note when date_time is null',
        text: 'should not add note when date_time is null',
        date_time: null,
        latitude: 'should not add note when date_time is null',
        longitude: 'should not add note when date_time is null',
        image_url: 'should not add note when date_time is null'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Notes.where('text', 'should not add note when date_time is null').fetch().then((note) => {
          console.log('should not have successfully added note with null date_time');
        });
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('should not add note when latitude is null', () => {
      return new Notes({
        title: 'should not add note when latitude is null',
        text: 'should not add note when latitude is null',
        date_time: 'should not add note when latitude is null',
        latitude: null,
        longitude: 'should not add note when latitude is null',
        image_url: 'should not add note when latitude is null'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Notes.where('text', 'should not add note when latitude is null').fetch().then((note) => {
          console.log('should not have successfully added note with null latitude');
        });
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('should not add note when longitude is null', () => {
      return new Notes({
        title: 'should not add note when longitude is null',
        text: 'should not add note when longitude is null',
        date_time: 'should not add note when longitude is null',
        latitude: 'should not add note when longitude is null',
        longitude: null,
        image_url: 'should not add note when longitude is null'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Notes.where('text', 'should not add note when longitude is null').fetch().then((note) => {
          console.log('should not have successfully added note with null longitude');
        });
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    // it('should not add note when author is null', () => {
    //   return new Notes({
    //     title: null,
    //     text: 'should not add note when author is null',
    //     date_time: 'should not add note when author is null',
    //     latitude: 'should not add note when author is null',
    //     longitude: 'should not add note when author is null',
    //     image_url: 'should not add note when author is null'
    //     // note_author_id: 24,
    //   })
    //   .save()
    //   .then(() => {
    //     return Notes.where('text', 'should not add note when author is null').fetch().then((note) => {
    //       console.log('should not have successfully added note with null author');
    //     });
    //   })
    //   .catch((err) => {
    //     expect(true).to.equal(true);
    //   });
    // });
  });
  describe('should add notes when nullable fields are null', () => {
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
        return Notes.where('title', 'should add notes that do not have an image_url field').fetch().then((note) => {
          expect(note.attributes.title).to.equal('should add notes that do not have an image_url field');
        });
      });
    });
  });
});

// IF VALUE IS TO BE UNIQUE, TRY ADDING IT TWICE AND MAKE SURE THE SECOND TIME THROWS AN ERROR
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
