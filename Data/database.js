(function(database)
{
var mongodb=require("mongodb");
//var mongoUrl="mongodb://localhost:27017/chatDB";
var mongoUrl= process.env.MongodbUrl ||"mongodb://localhost:27017/chatDB"; 
var theDB=null;

database.getDB=function(next)
{
    if(!theDB)
    {
            //Create a connection mongodb
            mongodb.MongoClient.connect(mongoUrl,function(err,db)
            {
                if(err)
                {
                    next(err,null);
                }
                else
                {
                    theDB={
                        "db":db,
                        "groups":db.collection("groups")
                    };
                    next(null,theDB);
                }
            })
    }
    else
    {
        next(null,theDB);
    }
}
})(module.exports);