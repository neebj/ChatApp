(function (chatgroupController) {
    
    var dataaccess= require('../Data/dataaccess');
    chatgroupController.init = function (app) {
        app.post("/api/groups/:groupName", function (req, res) {
            // var groupId=req.params.groupId;
            // res.set("Content-Type","application/json");
            // res.send({"foo":"bar"});
             var groupName =req.params.groupName;
            dataaccess.addGroup(groupName,function(err)
            {
                if(err)
                {
                    res.send(400,'Failed to insert group')
                }
                else
                {
                     res.set("Content-Type","application/json");
                     res.send(201,groupName + 'has been inserted');
                }
            });
        });

        app.get("/api/groups/:groupName",function(req,res)
        {
            var groupName =req.params.groupName;
            dataaccess.addGroup(groupName,function(err)
            {
                if(err)
                {
                    res.send(400,'Failed to insert group')
                }
                else
                {
                     res.set("Content-Type","application/json");
                     res.send(201,groupName + 'has been inserted');
                }
            });
        });
    }
}
)(module.exports);