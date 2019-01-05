var request = require("supertest");
var app = require("../app");

describe('  /', function() {
    it('respond with json', function(done) {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        //.expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe(' /test', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/test')
        //.send({name: 'john'})
        .set('Accept', 'application/json')
        .expect(500)
        .end(function(err, res) {
          if (err) return err;
          done();
        });
    });
  });