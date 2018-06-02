var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

describe('Cases get should return array', function() {
  // GET ALL
  it('should get all Cases', function(done) {
    request(app)
      .get('/api/cases')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      });
  });

  // CREATE

  it('Should create a Case', function(done) {
    request(app)
      .post('/api/cases')
      .send({
        title: 'case title',
        text: 'this is the text of my case'
      })
      .set('Accpet', 'application/json')
      .expect('Content-type', '/json')
      .expect(201)
      .end((err, resp) => {
        done();
      });
  });

  // UPDATE

  it('Should update a Case', function(done) {
    request(app)
      .post('/api/cases')
      .send({
        title: 'test case',
        descripton: 'test case description'
      })
      .set('Accept', 'application/json')
      .end(function(err, resp) {
        var ticketId = resp.body._id;
        request(app)
          .put('/api/cases/' + ticketId)
          .send({
            title: 'updated case title'
          })
          .end(function(err, res) {
            expect(res.body.title).to.equal('updated case title');
            done();
          });
      });
  });

  // DELETE

  it('Should delete one Case', function(done) {
    request(app)
      .post('/api/cases')
      .send({
        title: 'this should have been deleted',
        text: 'this is text for a deleted case'
      })
      .set('Accpet', 'application/json')
      .end(function(err, res) {
        var ticket = res.body;
        request(app)
          .delete('/api/cases/' + ticket._id)
          .end(function(err, res) {
            expect(res.body).to.eql(ticket);
            done();
          });
      });
  });
});
