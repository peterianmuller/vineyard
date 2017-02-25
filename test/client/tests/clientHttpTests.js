import app from '../../../server/index.js';
import supertest from 'supertest';
import chai from 'chai';
let expect = chai.expect;

describe('GET /', function() {
  it('respond with json', function() {
    return request(app)
      .get('/api/note')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
          assert(response.body, 'foo@bar.com')
      })
  });
});
