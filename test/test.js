var request=require('request'),
 app = require("../app.js"),
 assert=require('assert');
describe("Add Group Test", function(){
describe("Add groupName", function() {
it("returns status code 201", function(done) {
request.get('http://localhost:3000/api/groups/sachin',function(error,response,body)
{
assert.equal(201,response.statusCode);
app.closeServer();
done();
});
    });
  });

});
