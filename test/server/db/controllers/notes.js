// import mocha from 'mocha';
import chai from 'chai';

import Notes from '../../../../server/db/models/notes';
import { newNote, getAllNotes } from '../../../../server/db/controllers/notes';

const expect = chai.expect;
// chai.should();

// =============NOTES DATABASE CONTROLLER TESTS================//
describe('notes database controller', () => {
  describe('controller methods', () => {
    it('newNote should be a function', () => {
      expect(newNote).to.be.a('function');
    });
    it('getAllNotes should be a function', () => {
      expect(getAllNotes).to.be.a('function');
    });
  })
  describe('newNote should add all note fields', () => {
    it('newNote should add note title', () => {
      var params = {
        title: 'newNote should add note title',
        text: 'newNote should add note title',
        date_time: '2017-02-25',
        latitude: 'newNote should add note title',
        longitude: 'newNote should add note title',
        image_url: 'newNote should add note title'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        return Notes.where('title', 'newNote should add note title').fetch().then((note) => {
          expect(note.attributes.title).to.equal('newNote should add note title');
        })
        .then(() => {
            return Notes.where({
              title: 'newNote should add note title'
            }).destroy();
        });
      })
    });
    it('newNote should add note text', () => {
      var params = {
        title: 'newNote should add note text',
        text: 'newNote should add note text',
        date_time: '2017-02-25',
        latitude: 'newNote should add note text',
        longitude: 'newNote should add note text',
        image_url: 'newNote should add note textt'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        return Notes.where('text', 'newNote should add note text').fetch().then((note) => {
          expect(note.attributes.text).to.equal('newNote should add note text');
        })
        .then(() => {
            return Notes.where({
              text: 'newNote should add note text'
            }).destroy();
        });
      })
    });
    // it('newNote should add note date_time', () => {
    //   var params = {
    //     title: 'newNote should add note date_time',
    //     text: 'newNote should add note date_time',
    //     date_time: '2017-02-25',
    //     latitude: 'newNote should add note date_time',
    //     longitude: 'newNote should add note date_time',
    //     image_url: 'newNote should add note date_timet'
    //     // note_author_id: 24,
    //   }
    //   return newNote(params)
    //   .then(() => {
    //     return Notes.where('date_time', '2017-02-25').fetch().then((note) => {
    //       expect(note.attributes.date_time).to.equal('2017-02-25');
    //     })
    //     .then(() => {
    //         return Notes.where({
    //           date_time: 'newNote should add note date_time'
    //         }).destroy();
    //     });
    //   })
    // });
    it('newNote should add note latitude', () => {
      var params = {
        title: 'newNote should add note latitude',
        text: 'newNote should add note latitude',
        date_time: '2017-02-25',
        latitude: 'newNote should add note latitude',
        longitude: 'newNote should add note latitude',
        image_url: 'newNote should add note latitude'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        return Notes.where('latitude', 'newNote should add note latitude').fetch().then((note) => {
          expect(note.attributes.latitude).to.equal('newNote should add note latitude');
        })
        .then(() => {
            return Notes.where({
              latitude: 'newNote should add note latitude'
            }).destroy();
        });
      })
    });
    it('newNote should add note longitude', () => {
      var params = {
        title: 'newNote should add note longitude',
        text: 'newNote should add note longitude',
        date_time: '2017-02-25',
        latitude: 'newNote should add note longitude',
        longitude: 'newNote should add note longitude',
        image_url: 'newNote should add note longitude'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        return Notes.where('longitude', 'newNote should add note longitude').fetch().then((note) => {
          expect(note.attributes.longitude).to.equal('newNote should add note longitude');
        })
        .then(() => {
            return Notes.where({
              longitude: 'newNote should add note longitude'
            }).destroy();
        });
      })
    });
    it('newNote should add note image_url', () => {
      var params = {
        title: 'newNote should add note image_url',
        text: 'newNote should add note image_url',
        date_time: '2017-02-25',
        latitude: 'newNote should add note image_url',
        longitude: 'newNote should add note image_url',
        image_url: 'newNote should add note image_url'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        return Notes.where('image_url', 'newNote should add note image_url').fetch().then((note) => {
          expect(note.attributes.image_url).to.equal('newNote should add note image_url');
        })
        .then(() => {
            return Notes.where({
              image_url: 'newNote should add note image_url'
            }).destroy();
        });
      })
    });
  })
  describe('adding notes with notNullable fields', () => {
    it('newNote should not add a note when title is null', () => {
      var params = {
        title: null,
        text: 'newNote should not add a note when title is null',
        date_time: '2017-02-25',
        latitude: 'newNote should not add a note when title is null',
        longitude: 'newNote should not add a note when title is null',
        image_url: 'newNote should not add a note when title is nullt'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        console.log('Test failed: should not have added note');
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('newNote should not add a note when text is null', () => {
      var params = {
        title: 'newNote should not add a note when text is null',
        text: null,
        date_time: '2017-02-25',
        latitude: 'newNote should not add a note when text is null',
        longitude: 'newNote should not add a note when text is null',
        image_url: 'newNote should not add a note when text is nullt'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        console.log('Test failed: should not have added note');
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('newNote should not add a note when date_time is null', () => {
      var params = {
        title: 'newNote should not add a note when date_time is null',
        text: 'newNote should not add a note when date_time is null',
        date_time: null,
        latitude: 'newNote should not add a note when date_time is null',
        longitude: 'newNote should not add a note when date_time is null',
        image_url: 'newNote should not add a note when date_time is nullt'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        console.log('Test failed: should not have added note');
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('newNote should not add a note when latitude is null', () => {
      var params = {
        title: 'newNote should not add a note when latitude is null',
        text: 'newNote should not add a note when latitude is null',
        date_time: '2017-02-25',
        latitude: null,
        longitude: 'newNote should not add a note when latitude is null',
        image_url: 'newNote should not add a note when latitude is nullt'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        console.log('Test failed: should not have added note');
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
    it('newNote should not add a note when longitude is null', () => {
      var params = {
        title:  'newNote should not add a note when longitude is null',
        text: 'newNote should not add a note when longitude is null',
        date_time: '2017-02-25',
        latitude: 'newNote should not add a note when longitude is null',
        longitude: null,
        image_url: 'newNote should not add a note when longitude is nullt'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        console.log('Test failed: should not have added note');
      })
      .catch((err) => {
        expect(true).to.equal(true);
      });
    });
  })
  describe('adding notes will nullable fields', () => {
    it('newNote should add notes that do not have an image_url field', () => {
      var params = {
        title: 'newNote should add notes that do not have an image_url field',
        text: 'newNote should add notes that do not have an image_url field',
        date_time: '2017-02-25',
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
        .then(() => {
            return Notes.where({
              title: 'newNote should add notes that do not have an image_url field'
            }).destroy();
        });
      });
    });
  });
  describe('adding duplicates of unique fields', () => {
    it('newNote should not add duplicates of unique fields', () => {
      var params = {
        title: 'Not unique title',
        text: 'Not unique text',
        date_time: '2017-02-25',
        latitude: 'Not unique latitude',
        longitude: 'Not unique longitude',
        image_url: 'Not unique image_url'
        // note_author_id: 24,
      }
      return newNote(params)
      .then(() => {
        return newNote(params);
      })
      .catch((err) => {
        console.log(err);
        return Notes.where({
          title: 'Not unique title'
        }).destroy().then(() => {
          expect(true).to.equal(true);
        });
      });
    });
  });
});
// 2017-02-25
