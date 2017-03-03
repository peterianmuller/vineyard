// import mocha from 'mocha';
import chai from 'chai';

import Addresses from '../../../../server/db/models/addresses';

const expect = chai.expect;
// chai.should();

describe('addresses database model', () => {
  describe('should add all addresses fields', () => {
    it('should add address street', () => {
      return new Addresses({
        street: 'should add address street',
        street_2: 'should add address street',
        city: 'should add address street',
        state: 'should add address street',
        zip: 'should add address street',
        country: 'should add address street'
        // note_author_id: 24,
      })
      .save()
      .then(() => {
        return Addresses.where('title', 'should add address street').fetch().then((note) => {
          expect(note.attributes.title).to.equal('should add address street');
        });
      });
    });
    it('should add note text', () => {
      return new Addresses({
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
        return Addresses.where('text', 'should add note text').fetch().then((note) => {
          expect(note.attributes.text).to.equal('should add note text');
        });
      });
    });
    it('should add note date_time', () => {
      return new Addresses({
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
        return Addresses.where('date_time', 'should add note date_time').fetch().then((note) => {
          expect(note.attributes.date_time).to.equal('should add note date_time');
        });
      });
    });
    it('should add note latitude', () => {
      return new Addresses({
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
        return Addresses.where('latitude', 'should add note latitude').fetch().then((note) => {
          expect(note.attributes.latitude).to.equal('should add note latitude');
        });
      });
    });
    it('should add longitude', () => {
      return new Addresses({
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
        return Addresses.where('longitude', 'should add longitude').fetch().then((note) => {
          expect(note.attributes.longitude).to.equal('should add longitude');
        });
      });
    });
    it('should add note image_url', () => {
      return new Addresses({
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
        return Addresses.where('image_url', 'should add note image_url').fetch().then((note) => {
          expect(note.attributes.image_url).to.equal('should add note image_url');
        });
      });
    });
  })
  describe('should not add note when notNullable fields are null', () => {
    it('should not add note when title is null', () => {
      return new Addresses({
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
        return Addresses.where('text', 'should not add note when title is null').fetch().then((note) => {
          console.log('should not have successfully added note with null title');
        });
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('should not add note when text is null', () => {
      return new Addresses({
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
        return Addresses.where('text', 'should not add note when text is null').fetch().then((note) => {
          console.log('should not have successfully added note with null text');
        });
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('should not add note when date_time is null', () => {
      return new Addresses({
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
        return Addresses.where('text', 'should not add note when date_time is null').fetch().then((note) => {
          console.log('should not have successfully added note with null date_time');
        });
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('should not add note when latitude is null', () => {
      return new Addresses({
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
        return Addresses.where('text', 'should not add note when latitude is null').fetch().then((note) => {
          console.log('should not have successfully added note with null latitude');
        });
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('should not add note when longitude is null', () => {
      return new Addresses({
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
        return Addresses.where('text', 'should not add note when longitude is null').fetch().then((note) => {
          console.log('should not have successfully added note with null longitude');
        });
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    // it('should not add note when author is null', () => {
    //   return new Addresses({
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
    //     return Addresses.where('text', 'should not add note when author is null').fetch().then((note) => {
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
      return new Addresses({
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
        return Addresses.where('title', 'should add notes that do not have an image_url field').fetch().then((note) => {
          expect(note.attributes.title).to.equal('should add notes that do not have an image_url field');
        });
      });
    });
  });
});
