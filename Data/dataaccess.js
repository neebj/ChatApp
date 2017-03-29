(function(dataaccess){
var database=require('./database');

dataaccess.addGroup=function(groupName,next)
{
database.getDB(function(err,db)
{
    if(err)
    {
        next(err);
    }
    else
    {
        db.groups.insertOne({groupName:groupName},next)
    }
});
};

})(module.exports);