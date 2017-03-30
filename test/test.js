var request=require('request'),
 app = require("../app.js"),
 assert=require('assert');
describe("Add Group Test", function(){
describe("Add groupName", function() {
it("returns status code 201", function(done) {
request.post('/api/groups/sachin',function(req,res)
{
assert.equal(201,res.statusCode);//res.statusCode
app.closeServer();
done();
});
    });
  });

});
