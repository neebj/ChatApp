var request = require("supertest"),
    app = require("../app").getApp;

describe('GET /', function () {
   
    it('expects HTTP response 200', function () {
        request(app)
            .get('/api/groups/JesusChrist')
            .expect(200)    
            .end(function (err, res) {
                //if (err) return done(err);
                //done();
            });
    });
});



// var request=require('request'),
//  app = require("../app.js"),
//  assert=require('assert');
// describe("Add Group Test", function(){
// describe("Add groupName", function() {
// it("returns status code 201", function(done) {
// request.post('http://localhost:3000/api/groups/sachin',function(req,res)
// {
// assert.equal(201,res.statusCode);//res.statusCode
// app.closeServer();
// done();
// });
//     });
//   });

// });
