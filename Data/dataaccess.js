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

dataaccess.getAllGroups=function(next)
{
database.getDB(function(err,db)
{
    if(err)
    {
        next(err,null);
    }
    else
    {
        db.groups.find().toArray(function(err,results)
        {
            if(err)
            {
                next(err,null);
            }
            else
            {
              
                next(null,results)    ;
            }

        });
    }
});
};

})(module.exports);